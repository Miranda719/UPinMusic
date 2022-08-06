import React from 'react';
import styles from './index.less';
import { useRequest } from '@umijs/max';
import { RecentList } from '@/services';
import { NavBar, Space } from 'antd-mobile';
import { MoreOutline, PlayOutline, SearchOutline } from 'antd-mobile-icons';
import { useModel } from "@umijs/max";

export default function Page() {
    const { state } = useModel("stores");
  const {data,error,loading} = useRequest(()=>{ 
    return RecentList()
  });

  console.log(data);
  const right = (
    <div style={{ fontSize: 24 }}>
        <Space style={{ '--gap': '16px' }}>
            <SearchOutline />
            <MoreOutline />
        </Space>
    </div>
)

const back = () => {
    history.go(-1)
}
  const currentList = !loading && data.data.list
  return (
    <div>
    <div>
            <NavBar className={styles.navbar} right={right} onBack={back}>
                最近播放
            </NavBar>
            {/* {!loading && JSON.stringify(data)} */}
            <div className={styles.xhgd}>
            {(state.playList.length > 0) && state.playList.map((item: any) => (
                <ul className={styles.songs} key={item.id}>
                    <li>
                        <img src={item.imgUrl} width={50} height={50} />
                        <span >{item.songName}</span>
                        <PlayOutline className={styles.q} fontSize={15}/>
                        <p className={styles.songslist}>{item.name}</p>
                    </li>
                </ul>
            ))}
            </div>
            {/* {!loading && JSON.stringify(data.ids)}
            {!loading2 && JSON.stringify(data2.songs)} */}
        </div>
    </div>
  );
}
