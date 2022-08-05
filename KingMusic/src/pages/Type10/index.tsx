import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetMusicUrl, queryMusicList } from '@/services/search';
import { history } from '@umijs/max';
import { connect } from "@/.umi/plugin-dva";


const Type10 = ({search}) => {
    const [list, setList] = useState([])
    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setList(result.result.albums) : setList([]);
        console.log(result)
    };
    useEffect(() => {
        getContentList(search.keywords, 10)
    }, [])
    return (
        <div className={styles.container}>
            {list && <div className={styles.list}>
                {list.map(item => (
                   <div key={item.id}>
                   <img className={styles.pic} src={item.picUrl}></img>
                   <p className={styles.listItem} >{item.name}</p>
               </div>
                ))}
            </div>}
        </div>
    )
}


export default connect(({ search }) => ({
    search,
}))(Type10);