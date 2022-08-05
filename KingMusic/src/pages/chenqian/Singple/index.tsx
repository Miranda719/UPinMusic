import React from 'react';
import styles from './index.less';
import { useRequest } from '@umijs/max';
import { detailList } from '@/services';
import { NavBar, Space } from 'antd-mobile';
import { MoreOutline, SearchOutline } from 'antd-mobile-icons';


export default function Page() {
    const { data, error, loading } = useRequest(() => {
        return detailList()
    });
    const userDetailist = !loading && data.profile
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
const gowode=()=>{
    history.go(-1)
}
    return (
        <div>          
            <div>
                <img src={userDetailist.backgroundUrl} alt="" className={styles.beijing} />
            </div>
            <div className={styles.touxiang}>
           <img src={userDetailist.avatarUrl} alt="" onClick={() => gowode()}/>
            <h2 className={styles.nickname}>{userDetailist.nickname}</h2>
            <div className={styles.ff}>
                <span>{userDetailist.follows}关注 <span>|</span></span>
                <span>{userDetailist.followeds}粉丝<span>|</span></span>
                <span>Lv.{ !loading && data.level}</span>
            </div>
      </div>
            
        </div>
    );
}
