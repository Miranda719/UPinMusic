import { connect } from "@/.umi/plugin-dva";
import { queryMusicList } from "@/services/search";
import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
const Type1014 = ({ search }) => {
    const [list, setList] = useState([])
    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setList(result.result.videos) : setList([]);
        console.log(result)
    };
    useEffect(() => {
        getContentList(search.keywords, 1014)
    }, [])
    return (

        <div >
            {list && <div className={styles.list}>
                {list.map(item => (
                    <div key={item.coverUrl} className={styles.itemBox}>
                        <img className={styles.pic} src={item.coverUrl}></img>
                        <p className={styles.listItem} >{item.title}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default connect(({ search }) => ({
    search,
}))(Type1014);