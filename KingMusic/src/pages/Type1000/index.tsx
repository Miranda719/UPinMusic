import { connect } from "@/.umi/plugin-dva";
import { queryMusicList } from "@/services/search";
import React, { FC, useEffect, useState } from "react";
import styles from './index.less';

const Type1000 = ({search}) => {
    const [list, setList] = useState([])
    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setList(result.result.playlists) : setList([]);
        console.log(result)
    };
    useEffect(() => {
        getContentList(search.keywords, 1000)
    }, [])
    return (
        <div >
            {list && <div className={styles.list}>
                {list.map(item => (
                    <div key={item.id}>
                        <img className={styles.pic} src={item.coverImgUrl}></img>
                        <p className={styles.listItem} >{item.name}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default connect(({ search }) => ({
    search,
}))(Type1000);