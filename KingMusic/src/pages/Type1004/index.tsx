import { connect } from "@/.umi/plugin-dva";
import { GetMv,queryMusicList } from "@/services/search";
import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { history } from '@umijs/max';
const Type1004 = ({ search }) => {
    const [list, setList] = useState([])
    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setList(result.result.mvs) : setList([]);
    };

    const itemClick=async(id:number)=>{
        let result=await GetMv(id);
        let url;
        result.code === 200 ? url=result.data.url : '';
        history.push(url)
    }
    useEffect(() => {
        getContentList(search.keywords, 1004)
    }, [])
    return (
        <div >
            {list && <div className={styles.list}>
                {list.map(item => (
                    <div key={item.id} className={styles.itemBox}>
                        <img className={styles.pic} src={item.cover} onClick={()=>itemClick(item.id)}></img>
                        <p className={styles.listItem} >{item.name}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default connect(({ search }) => ({
    search,
}))(Type1004);