import { GetMusicDetail, GetMusicUrl } from '@/services/index';
import React from 'react';

export default {
    namespace: 'musicDetail',
    state: {
        musicList: {
            id:0,
            url: '',
            name: '',
            songName: '',
            imgUrl: '',
        },
        isPlay:false
    },
    reducers: {
        save(state: any, { payload }) {
            const { musicList } = payload;
            console.log(musicList);
            
            return { ...state, musicList };
        },
        update(state: any, { payload }){
            const {isPlay} = payload;
            return {...state,isPlay};
        }
    },
    effects: {
        *getMusicData({ payload: { id  } }, { call, put }) {
            const data = yield call(GetMusicUrl, { id });
            const data2 = yield call(GetMusicDetail, { id });
            yield put({
                type: 'save',
                payload: {
                    musicList: {
                        id:data.data[0].id,
                        url: data.data[0].url,
                        name: data2.songs[0].ar[0].name,
                        songName: data2.songs[0].name,
                        imgUrl: data2.songs[0].al.picUrl
                    }
                }
            });
        },

        *getMusicDetail({ payload: { id  } }, { call, put }) {

        },
        *upDateIsPlay({payload:{isPlay=false}},{call,put}){
            
            yield put({
                type:'update',
                payload:{
                    isPlay:isPlay
                }
            })
        }

    }
}