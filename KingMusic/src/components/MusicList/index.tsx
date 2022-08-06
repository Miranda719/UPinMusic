import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetMusicUrl, queryMusicList } from '@/services/search';
import { useModel } from "@umijs/max";
 type Props={
    list?:Array<object>
 }

const MusicList :FC<Props>= (props) => {
const {effects,state,audio} = useModel('stores');
let [id,setId] = useState(state.musicList.id);
    const list=props.list;
    //实现点击播放
    effects.getMusicData({payload:{id}});
    const itemClick = async (ids: number) => {
        setId(ids);
        state.isPlay=true;
        if (state.isPlay) {
            setTimeout(() => {
                audio.current?.play();
            }, 300);
            
        } else {
            return false
        }
    }

    return (
        <div>
            {list && <div className={styles.list}>
                {list.map((item:any) => (
                    <p onClick={() => itemClick(item.id)} className={styles.listItem} key={item.id}>{item.name}</p>
                ))}
            </div>}
        </div>
    )
}

export default MusicList;