import { history } from "@umijs/max";
import { FC } from "react";
import './index.less'
const Music1:FC = ()=>{
    const goMusicDetail = ()=>{
        history.push('/qinzhonjin')
    }
    return (
        <div className="music-box" onClick={()=>goMusicDetail()}>
            music1组件
        </div>
    )
}

export default Music1;