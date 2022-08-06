import { GetMusicUrl, GetMusicDetail } from '@/services';
import { MenuFoldOutlined, PauseCircleOutlined, PlayCircleOutlined, RetweetOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { useModel } from "@umijs/max";
import stores from '@/models/stores';
import BtnPlayer from '../BtnPlayer';
const MusicDetails = (props: any) => {
  //获取全局数据
  const { state, musicMethods, inner,audio } = useModel("stores");
  // const [TF,setTF]=useState(true)
  //触发组件更新
  const [data,setDate] = useState(1);
  const dodo = ()=>{
    setDate(data+1);
  }
  const playRecord = ()=>{
    musicMethods.playRecord();
    //进度条改变
    audio.current!.ontimeupdate = () => {
      if (state.isPlay) {
        dodo();
        console.log('xxxxxxxx',state.duration);
          let percent = audio.current!.currentTime / audio.current!.duration * 100;
          inner.current!.style.width = percent + '%';
          state.currentTime = musicMethods.timeParse(audio.current!.currentTime);
          //如果歌曲播放完成则停止播放
          if (percent === 100) {
              state.isPlay = false;
              setTimeout(() => {
                  inner.current!.style.width = '0%';
                  state.currentTime = '00:00';
              }, 0.5);
          }
      }
  }
  setTimeout(() => {
    playRecord();
  }, 100);
  }
  // playRecord()

  const clcikLine = (e: any) => {
    dodo();
    musicMethods.clcikLine(e);
  }

  const handleMouseMove = (e: any) => {
    musicMethods.handleMouseMove(e);
  }

  const handleMouseUp = () => {
    musicMethods.handleMouseUp();
  }

  const handleMouseDown = () => {
    musicMethods.handleMouseDown();
  }
  return (
    <div className={styles.music_bg} >
      <div>
        {props.children}
        <h1 className={styles.title}>歌曲|歌词</h1>
      </div>
      <div className={styles.content}>
        <div>
          <img className={styles.coverImg} src={state.musicList.imgUrl} alt="" />
        </div>
        <p className={styles.title2}>{state.musicList.songName}</p>
        <p >歌手: {state.musicList.name}</p>
      </div>
      <div className={styles.bottom_box}>
        <div className={styles.progressBar} id={'line'} onClick={clcikLine} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp} >
          <span className={styles.progressBar_1} id={'line1'}>
            <span className={styles.progressBar_2} ref={inner} onMouseDown={handleMouseDown}  ></span>
          </span>
        </div>
        <div className={styles.startEndTime}>
          <span>{state.currentTime}</span>
          <span>{state.duration}</span>
        </div>
        <div className={styles.svgF}>
          <RetweetOutlined className={`${styles.svg_item} ${styles.small_svg}`} />
          <StepBackwardOutlined className={styles.svg_item} onClick={()=>(musicMethods.changeMusic('prev'),dodo())} />
          <BtnPlayer>
            <div>
            <PauseCircleOutlined style={!state.isPlay ? { display: 'none' } : { display: 'block' }} className={styles.svg_item} onClick={() => (playRecord(),dodo())} />
            <PlayCircleOutlined style={state.isPlay ? { display: 'none' } : { display: 'block' }} className={styles.svg_item} onClick={() => (playRecord(), musicMethods.playerOr(),dodo())} />
            </div>
          </BtnPlayer> 
          <StepForwardOutlined className={styles.svg_item}  onClick={()=>(musicMethods.changeMusic('next'),dodo())}/>
          <MenuFoldOutlined className={`${styles.svg_item} ${styles.small_svg}`} />
        </div>
      </div>
    </div>
  )
}

export default MusicDetails;