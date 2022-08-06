import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import {queryMusicList } from '@/services/search';
import { connect } from "@/.umi/plugin-dva";


const Type2000 = ({ search }) => {
    const [list, setList] = useState([])
    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setList(result.data.resources) : setList([]);
        console.log(result)
    };
    useEffect(() => {
        getContentList(search.keywords, 2000)
    }, [])
    return (
        <div>
            {list && <div className={styles.list}>
                {list.map(item => (
                    <div key={item.resourceId} className={styles.info}>
                        <img className={styles.pic} src={item.uiElement.image.imageUrl}></img>
                        <span className={styles.listItem} >{item.uiElement.mainTitle.title}</span>
                    </div>
                ))}
            </div>}

        </div>
    )
}
export default connect(({ search }) => ({
    search,
}))(Type2000);