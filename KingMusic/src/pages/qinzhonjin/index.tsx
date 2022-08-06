import { FC, useEffect, useState } from "react";
import './index.less';
import { GetMusicDetail, GetMusicUrl } from '@/services/index';
import { useRequest } from "@umijs/max";
import { List } from 'antd-mobile';
import { useModel } from "@umijs/max";
const musicList: FC = () => {
    let [id, setId] = useState(354601);

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
    // effects.getMusicData({payload:{id}});
    const gatData = (ids: number) => {
        state.isPlay=true;
        if (state.isPlay) {
            console.log('播放',state);
            setTimeout(() => {
                audio.current?.play();
            }, 200);
            
        } else {
            return false
        }
    }
    useEffect(()=>{
        gatData(id);
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
export default musicList;