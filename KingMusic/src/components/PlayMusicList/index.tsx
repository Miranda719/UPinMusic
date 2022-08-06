import { FC, useEffect, useState } from "react";
import './index.less';
import { GetMusicDetail, GetMusicUrl } from '@/services/index';
import { useRequest } from "@umijs/max";
import { List } from 'antd-mobile';
import { useModel } from "@umijs/max";
const PlaymusicList: FC = () => {
    let [id, setId] = useState(354601);
    let [isTrue,setisTrue] = useState(false);
    const users = [{
        name: 'FIR',
        songName: '天下',
        id: 298317
    },
    {
        name: 'FIR',
        songName: '天下',
        id: 210049
    },
    {
        name: 'FIR',
        songName: '天下',
        id: 255020
    },
    {
        name: 'FIR',
        songName: '天下',
        id: 210062
    },
    {
        name: 'FIR',
        songName: '天下',
        id: 5268423
    }];

    const { state,audio,effects,musicMethods } = useModel("stores");
    effects.getMusicData({payload:{id}});
    const gatData = (ids: number) => {
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
            gatData(id);
        }
        setisTrue(true)
    },[id])

    return (
        <div className="mu_content">
            <h3 className="title">播放列表</h3>
            <div className="list_main">
                <List>
                    {users.map(item => (
                        <List.Item key={item.id} onClick={() => (gatData(item.id), setId(item.id))} >
                            {item.name}--{item.songName}
                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    )
}
export default PlaymusicList;