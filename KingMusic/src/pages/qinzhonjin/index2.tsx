import { GetMusicUrl, GetMusicDetail } from '@/services';
import { MenuFoldOutlined, PauseCircleOutlined, PlayCircleOutlined, RetweetOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { useRequest } from '@umijs/max';
import React from 'react';
import { render } from 'react-dom';
import styles from './index.less';
import { connect } from '@umijs/max';
class Page extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }
  // const { data, loading } = useRequest(() => GetMusicUrl());
  // const { data: data2, loading: loading2 } = useRequest(() => GetMusicDetail());
  readonly state = {
    data1: this.props.musicDetail.musicList.imgUrl,
    url: this.props.musicDetail.musicList.url,
    signame: this.props.musicDetail.musicList.songName,
    name: this.props.musicDetail.musicList.name,
    isPlay: false,
    currentTime: '00:00',
    duration:"00:00",
    isDrag: false,//是否拖动
    isClick:true,
  }
  audio = React.createRef<HTMLAudioElement>();
  inner = React.createRef<HTMLSpanElement>();

  playRecord = () => {
    if (!this.state.isPlay) {
      this.setState({ isPlay: true ,duration:this.timeParse(this.audio.current!.duration)});
      this.audio.current?.play();
    } else {
      this.setState({ isPlay: false });
      this.audio.current?.pause();
    }
    //音乐进度条
    this.audio.current!.ontimeupdate = () => {
      if (this.state.isPlay) {
        let percent = this.audio.current!.currentTime / this.audio.current!.duration * 100;
        this.inner.current!.style.width = percent + '%';
        this.setState({
          currentTime: this.timeParse(this.audio.current!.currentTime)
        })
        if(percent ===100){
          this.setState({
            isPlay: false 
          },()=>{
            setTimeout(()=>{
              this.inner.current!.style.width = '0%';
              this.setState({
                currentTime: '00:00'
              })
            },0.5);
          })
        }
      }
    }
    // this.audio.current?.play();
  }

  // 时间一位数时加0
  pad = (val: number) => {
    const sVal = Math.floor(val); // 舍弃毫秒
    if (sVal < 10) return `0${sVal}`;
    return Number.isNaN(sVal) ? '00' : sVal.toString();
  }

  // 时间格式化为xx:xx
  timeParse = (sec: number) => {
    const min = Math.floor(sec / 60);
    const secVal = sec - min * 60;
    return `${this.pad(min)}:${this.pad(secVal)}`;
  }

  playerOr = () => {
    if (!this.state.isPlay) {
      return <PlayCircleOutlined className={styles.svg_item} onClick={() => this.playRecord()} />
    } else {
      return <PauseCircleOutlined className={styles.svg_item} onClick={() => this.playRecord()} />
    }

    // <PauseCircleOutlined className={styles.svg_item}  />
  }

  moveLine = (e:any)=>{
    
    if(e.target.parentNode.id !== 'line'&& e.target.parentNode.id !== 'line1'){
      return false;
    }
    const {offsetX} = e.nativeEvent;
    const {offsetWidth} = e.target
    let percent = offsetX/offsetWidth;
    this.inner.current!.style.width = percent * 100 +'%';
    this.audio.current!.currentTime = percent * this.audio.current!.duration;
    // console.log('xxxxxxxx',offsetX,this.state.currentTime,offsetWidth,e.target.offsetWidth);
    this.setState({
      currentTime:this.timeParse(this.audio.current!.currentTime)
    })
  } 


  clcikLine =(e:any)=>{
    setTimeout(()=>{
      this.setState({
        isClick:true
      });
    },1000);
    if(this.state.isClick){
      this.setState({
        isClick:false
      });
      this.moveLine(e);
    }
    console.log(this.state.isClick);
    
    
  }

  handleMouseMove = (e:any)=>{
    
    if(this.state.isDrag){
      this.moveLine(e);
    }
  }

  handleMouseUp = ()=>{
    this.setState({
      isDrag:false
    })
  }

  handleMouseDown = ()=>{
    this.setState({
      isDrag:true
    })
  }


  render() {
    // const { data: data2, loading: loading2 } = useRequest(() => GetMusicDetail());
    // console.log(this.props);
    return (
      <div className={styles.music_bg}>
        <div>
          <h1 className={styles.title}>歌曲|歌词</h1>
        </div>
        <div className={styles.content}>
          <div>
            <img className={styles.coverImg} src={this.state.data1} alt="" />
          </div>
          <p className={styles.title2}>{this.state.signame}</p>
          <p >歌手: {this.state.name}</p>
        </div>
        <div className={styles.bottom_box}>
          <audio className={styles.hideen_audio} ref={this.audio} src={this.state.url} controls> 你的浏览器不支持音频播放哦</audio>
          <div className={styles.progressBar} id={'line'}  onClick={this.clcikLine} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseUp} onMouseUp={this.handleMouseUp} >
            <span className={styles.progressBar_1} id={'line1'}>
              <span className={styles.progressBar_2} ref={this.inner} onMouseDown={this.handleMouseDown}  ></span>
            </span>
          </div>
          <div className={styles.startEndTime}>
            <span>{this.state.currentTime}</span>
            <span>{this.state.duration}</span>
          </div>
          <div className={styles.svgF}>
            <RetweetOutlined className={`${styles.svg_item} ${styles.small_svg}`} />
            <StepBackwardOutlined className={styles.svg_item} />
            {this.playerOr()}
            <StepForwardOutlined className={styles.svg_item} />
            <MenuFoldOutlined className={`${styles.svg_item} ${styles.small_svg}`} />
          </div>
        </div>
      </div>
    )
  }

}

export default connect(({musicDetail,loading})=>({
  musicDetail,
  loading:loading.models.musicDetail,
  loadingList:loading.effects['musicDetail/getMusicData']
}))(Page);