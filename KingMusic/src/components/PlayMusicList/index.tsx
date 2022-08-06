import { FC, useEffect, useState } from "react";
import './index.less';
import { GetMusicDetail, GetMusicUrl } from '@/services/index';
import { useRequest } from "@umijs/max";
import { List } from 'antd-mobile';
import { useModel } from "@umijs/max";
const PlaymusicList: FC = () => {
    let [id, setId] = useState(354601);
    let [isTrue,setisTrue] = useState(false);
    const { state,audio,reducers } = useModel("stores");

    const gatData = async (item:any,index?:number) => {
        state.currentIndex = index;
        await reducers.save({
            payload: {
                musicList: {
                    id: item.id,
                    url: item.url,
                    name: item.name,
                    songName: item.songName,
                    imgUrl: item.imgUrl
                }
            }
        }, state)
        
        state.isPlay=true;
        if (state.isPlay) {
            console.log('播放',state);
            setTimeout(() => {
                audio.current?.play();
                console.log('xxxxxxxx');
            }, 300);
            
        } else {
            return false
        }
    }
    useEffect(()=>{
        if(isTrue){
            gatData(id,state.currentIndex);
        }
        setisTrue(true)
    },[id])

    return (
        <div className="mu_content">
            <h3 className="title">播放列表</h3>
            <div className="list_main">
                <List>
                    {state.playList.map((item:any,index) => (
                        <List.Item key={item.id} onClick={() => (gatData({item},index), setId(item))} >
                            {item.name}--{item.songName}
                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    )
}
export default PlaymusicList;