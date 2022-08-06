import React, { useEffect, useState } from "react";
import { GetMusicDetail, GetMusicUrl } from '@/services/index';
import { useRequest } from "@umijs/max";
import { MenuFoldOutlined, PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import styles from '../components/MusicDetails/index.less';
import {  Toast } from 'antd-mobile'
// import { connect } from "@umijs/max";
// connect(({musicDetail})=>{})
export default () => {
    //全局属性
    const Routes = '';
    const state = {
        musicList: {                //当前播放歌曲的信息
            id: 354601,
            url: '',
            name: '',
            songName: '',
            imgUrl: '',
        },
        isPlay: false,              //是否播放
        duration: "00:00",            //当前播放音乐总时长
        currentTime: '00:00',        //当前播放时间
        isClick: true,               //是否允许连续多次点击
        isDrag: false,               //是否拖动
        playList: [],                //播放列表
        currentIndex:0,              //当前播放的歌曲索引
    }
    const audio = React.createRef<HTMLAudioElement>();
    const inner = React.createRef<HTMLSpanElement>();

    const reducers = {
        save({ payload }:any, state: any) {
            const { musicList } = payload;
            if (typeof musicList === 'undefined'||typeof musicList.id === 'undefined') { 
                return false
             }else{
                state.musicList = musicList ;
             }
            //判断歌曲在播放列表是否已存在
            const ToF = state.playList.filter((item: any) => (item.id === musicList.id));
            if (state.playList.length === 0 || ToF.length === 0) {
                
                state.playList.unshift(state.musicList);
            } else {
                return false;
            }

        },
        update({ payload }:any, state: any) {
            const { isPlay } = payload;
            state.isPlay = isPlay;
        }
    };

    const effects = {
        getMusicData({ payload: { id } }:any) {
            const { data,loading } = useRequest(async() => {
                return await GetMusicUrl(id);
            }, { refreshDeps: [id] });
            const { data: data2,loading:loading2 } = useRequest(async() => {
                return await GetMusicDetail(id);
            }, { refreshDeps: [id] });
            
            !loading&&!loading2&&reducers.save({
                payload: {
                    musicList: {
                        id: data?.data[0].id,
                        url: data?.data[0].url,
                        name: data2?.songs[0].ar[0].name,
                        songName: data2?.songs[0].name,
                        imgUrl: data2?.songs[0].al.picUrl
                    }
                }
            }, state)
        }
    }
    // effects.getMusicData({ payload: { id: 354601 } })

    const musicMethods = {
        playRecord: () => {
            console.log(state.isPlay);
            if (state.isPlay) {
                reducers.update({ payload: { isPlay: false } }, state);
                audio.current?.pause();
            } else {
                state.duration = musicMethods.timeParse(audio.current!.duration);
                reducers.update({ payload: { isPlay: true } }, state)
                audio.current?.play();
            }
        },
        // 时间一位数时加0
        pad: (val: number) => {
            const sVal = Math.floor(val); // 舍弃毫秒
            if (sVal < 10) return `0${sVal}`;
            return Number.isNaN(sVal) ? '00' : sVal.toString();
        },
        // 时间格式化为xx:xx
        timeParse: (sec: number) => {
            const min = Math.floor(sec / 60);
            const secVal = sec - min * 60;
            return `${musicMethods.pad(min)}:${musicMethods.pad(secVal)}`;
        },
        //切换播放暂停按钮
        playerOr: () => {
            // if (!state.isPlay) {
            return <PlayCircleOutlined className={styles.svg_item} onClick={() => (musicMethods.playRecord(), musicMethods.playerOr())} />
            // } else {
            return <PauseCircleOutlined className={styles.svg_item} onClick={() => musicMethods.playRecord()} />
            // }
        },
        playerOr2: () => {
            return <PauseCircleOutlined className={styles.svg_item} onClick={() => musicMethods.playRecord()} />
        },
        //移动进度条
        moveLine: (e: any) => {
            if (e.target.parentNode.id !== 'line' && e.target.parentNode.id !== 'line1') {
                return false;
            }
            const { offsetX } = e.nativeEvent;
            const { offsetWidth } = e.target
            let percent = offsetX / offsetWidth;
            inner.current!.style.width = percent * 100 + '%';
            audio.current!.currentTime = percent * audio.current!.duration;
            state.currentTime = musicMethods.timeParse(audio.current!.currentTime);
        },
        //点击，防抖
        clcikLine: (e: any) => {
            setTimeout(() => {
                state.isClick = true;
            }, 1000);
            if (state.isClick) {
                state.isClick = false;
                musicMethods.moveLine(e);
            } else {
                return false;
            }
        },
        //拖动进度条
        handleMouseMove: (e: any) => {
            if (state.isDrag) {
                musicMethods.moveLine(e);
            }
        },
        //鼠标松开
        handleMouseUp: () => {
            state.isDrag = false;
        },
        //鼠标按住
        handleMouseDown: () => {
            state.isDrag = true;
        },
        changeMusic:(direction:string)=>{
            if(state.playList.length < 2){
                Toast.show({
                    content: `当前列表中有${state.playList.length}首歌曲`,
                  });
                  return false;
            }else if(state.playList.length-2 < state.currentIndex){
                state.currentIndex = -1;
            }

            if(direction === 'prev'){
                state.currentIndex<0?state.currentIndex = state.playList.length-1:'';
                state.currentIndex-=1;
                state.currentIndex===-1?state.currentIndex = state.playList.length-1:'';               
                const musicList = state.playList[state.currentIndex];
                reducers.save({payload:{musicList}},state);
                state.isPlay=true;
                setTimeout(() => {
                    audio.current?.play();
                }, 100);

            }else if(direction === 'next'){
                state.currentIndex++;
                const musicList = state.playList[state.currentIndex];
                reducers.save({payload:{musicList}},state);
                state.isPlay=true;
                setTimeout(() => {
                    audio.current?.play();         
                }, 100);
            }
            // console.log(state.currentIndex,state.musicList,'xxxxxxxxxxxx');
        }
    }

    return { state, audio, musicMethods, inner, effects, reducers,Routes };
}