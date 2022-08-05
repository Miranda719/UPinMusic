import { connect } from "@/.umi/plugin-dva";
import { queryMusicList } from "@/services/search";
import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
const Type1006 = ({ search }) => {
    const [list, setList] = useState([])
    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setList(result.result.songs) : setList([]);
        console.log(result)
    };
    useEffect(() => {
        getContentList(search.keywords, 1006)
    }, [])
    return (
        <div>
            {list && <div className={styles.list}>
                {list.map(item => (
                    <p className={styles.listItem} key={item.id}>{item.lyrics.txt}</p>
                ))}
            </div>}
        </div>
    )
}

export default connect(({ search }) => ({
    search,
}))(Type1006);