import React, { FC, useEffect, useState } from "react";
import { Tabs, Badge, List, Image } from 'antd-mobile'
import { useRequest } from '@umijs/max';
import { GetPlayList } from '@/services';
import styles from "./index.less"
import { PlayOutline } from 'antd-mobile-icons'
import { useModel } from "@umijs/max";
const HotPlayList: FC<HomeHotIProps> = (props) => {
    const [key, setKey] = useState(5001)
    const {effects,state,audio} = useModel('stores');
    let [id,setId] = useState(state.musicList.id);
    const { data: pdata, loading: ploading } = useRequest(() => {
        return GetPlayList(key)
    }, { ready: !!props.tdata, refreshDeps: [key], }
    );
    effects.getMusicData({payload:{id}});
    const getDatas = (ids:number)=>{
        setId(ids);
        state.isPlay=true;
        // console.log('播放',state);
        if (state.isPlay) {
            // console.log('播放',state);
            setTimeout(() => {
                audio.current?.play();
                // console.log('xxxxxxxx');
            }, 300);
            
        } else {
            return false
        }
        
    }


    return <div className="hotplaylist">
        <Tabs onChange={(key: any) => {
            setKey(key)
        }}>
            {props.tdata.tags.map((item: { id: any; name: any; }, index: any) => (<Tabs.Tab title={item.name} key={item.id}>
                <List className={styles.list}>
                    {pdata && pdata.songs.map((item: any, idx: any) => (
                        <List.Item onClick={()=> getDatas(item.id)}
                            key={item.id}
                            className={styles.itemlist}
                            prefix={
                                <Image
                                    src={item.al.picUrl}
                                    className={styles.img}
                                    fit='cover'
                                    width={50}
                                    height={50}
                                />
                            }
                        >
                            <div className={styles.nolist}>{idx + 1}</div>
                            <div className={styles.listTitle}>
                                <div className={styles.listName}>{item.name}</div>
                                <div className={styles.arName}>
                                    {item.ar.map((its: any) => {
                                        return <span key={its.id}>{its.name}&nbsp;/&nbsp;</span>
                                    })}
                                    - {item.name}
                                </div>
                                {/* <div className={styles.playIcon}>
                                    <PlayOutline className={styles.icons} />
                                </div> */}
                            </div>
                        </List.Item>
                    ))}
                    {/* <div>加载更多…</div> */}
                </List>
            </Tabs.Tab>))}
        </Tabs>
    </div>
}

export default HotPlayList