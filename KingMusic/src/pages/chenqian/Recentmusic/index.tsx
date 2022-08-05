import React from 'react';
import styles from './index.less';
import { useRequest } from '@umijs/max';
import { RecentList } from '@/services';
import { NavBar, Space } from 'antd-mobile';
import { MoreOutline, PlayOutline, SearchOutline } from 'antd-mobile-icons';


export default function Page() {
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
            {!loading && currentList.map((item: any) => (
                <ul className={styles.songs} key={item.data.id}>
                    <li>
                        <img src={item.data.al.picUrl} width={50} height={50} />
                        <span >{item.data.name}</span>
                        <PlayOutline className={styles.q} fontSize={15}/>
                        <p className={styles.songslist}>{item.data.ar[0].name}--{item.data.al.name}</p>
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
