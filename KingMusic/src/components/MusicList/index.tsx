import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetMusicUrl, queryMusicList } from '@/services/search';
import { history } from '@umijs/max';
 type Props={
    list?:Array<object>
 }

const MusicList :FC<Props>= (props) => {
    const list=props.list;
    const itemClick = async (id: number) => {
        // history.push(`/qinzhongjin?id=${id}`);
        let result = await GetMusicUrl(id);
        const url = result.data[0].url;
        history.push(url)
    }

    return (
        <div>
            {list && <div className={styles.list}>
                {list.map(item => (
                    <p onClick={() => itemClick(item.id)} className={styles.listItem} key={item.id}>{item.name}</p>
                ))}
            </div>}
        </div>
    )
}

export default MusicList;