import { useModel } from "@umijs/max";
import { history } from "@umijs/max";
import React, { FC, ReactNode, useState } from "react";
import './index.less';
import { connect } from "@umijs/max";
import BtnPlayer from '../BtnPlayer';
import { PauseCircleOutlined, PlayCircleOutlined, MenuFoldOutlined } from '@ant-design/icons';

connect(({ musicDetail }) => { })

const Music1 = (props: any) => {
    const { audio } = useModel("stores");
    const { musicMethods, state, inner } = useModel("stores");

    //触发组件更新
    const [data, setDate] = useState(1);
    const dodo = () => {
        setDate(data+1);
    }
    const goTo=()=>{
        history.push('/qinzhonjin');
    }
    let PathList = ['/qinzhonjin','/','/chenqian','/xujiapeng'];
    let TF = true;
    if(PathList.includes(location.pathname)){
        TF = false
    }

    return (
        <div className="music-box" style={TF?{bottom:'0px'}:{bottom:'49px'}} >
            <div className="music-content" >
                <div className="content-one">
                    <img className="one-img" src={state.musicList.imgUrl} />
                </div>
                <div onClick={() => props.updateVisible(true)} className='content-two'>
                    <span>{state.musicList.songName} -</span>
                    <span>- {state.musicList.name}</span>
                </div>
                <div className='content-three'>
                    <BtnPlayer>
                        <div className="music-content-title" >
                            <PauseCircleOutlined style={!state.isPlay ? { display: 'none' } : { display: 'block' }} onClick={() => (musicMethods.playRecord(), dodo())} />
                            <PlayCircleOutlined style={state.isPlay ? { display: 'none' } : { display: 'block' }} onClick={() => (musicMethods.playRecord(), dodo())} />
                            <MenuFoldOutlined style={{margin:'0 0 0 20px'}} onClick={() => (props.updateVisible2(true))} />
                        </div>
                    </BtnPlayer>
                </div>
            </div>
            <span ref={inner} style={{ display: 'none' }}  ></span>
            <audio style={{ display: 'none' }} ref={audio} src={state.musicList.url} controls> 你的浏览器不支持音频播放哦</audio>
        </div>
    )
}


export default Music1;