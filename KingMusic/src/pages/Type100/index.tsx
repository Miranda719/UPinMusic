import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetMusicById, GetMusicUrl, queryMusicList } from '@/services/search';
import { history } from '@umijs/max';
import { connect } from "@/.umi/plugin-dva";

const Type100 = ({search}) => {
    const [list, setList] = useState([])
    const [artists,setArtists]=useState([]);

    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setArtists(result.result.artists) : setArtists([]);
        console.log(result)
    };
    useEffect(() => {
        getContentList(search.keywords, 100)
    }, [])

    const artistClick = async (id: number) => {
        let result = await GetMusicById(id);
        setList(result.hotSongs)
    }

    const itemClick = async (id: number) => {
        let result = await GetMusicUrl(id);
        const url = result.data[0].url;
        history.push(url)
    }

    if (list && list.length > 0) {
        return (
            <div className={styles.container}>
                {list && <div className={styles.list}>
                    {list.map(item => (
                        <p onClick={() => itemClick(item.id)} className={styles.listItem} key={item.id}>{item.name}</p>
                    ))}
                </div>}
            </div>
        )
    }
    else {
        return (
            <div>
                {artists && <div className={styles.artists}>
                    {artists.map(item => (
                        <div onClick={() => artistClick(item.id)} key={item.id} className={styles.info}>
                            <img className={styles.pic} src={item.picUrl}></img>
                            <span className={styles.listItem} >歌手：{item.name}</span>
                        </div>
                    ))}
                </div>}
            </div>
        )
    }
}

export default connect(({ search }) => ({
    search,
}))(Type100);