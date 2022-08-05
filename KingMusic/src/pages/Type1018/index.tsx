import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetMusicById, GetMusicUrl, queryMusicList } from '@/services/search';
import { history } from '@umijs/max';
import { connect } from "@/.umi/plugin-dva";

const Type1018 = ({search}) => {
    const [list, setList] = useState([])
    const [artists,setArtists]=useState([]);

    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        if(result.code===200){
            setArtists(result.result.artist.artists);
            setList(result.result.song.songs)
        }
        console.log(result)
    };
    useEffect(() => {
        getContentList(search.keywords, 1018)
    }, [])

    const itemClick = async (id: number) => {
        // history.push(`/qinzhongjin?id=${id}`);
        let result = await GetMusicUrl(id);
        const url = result.data[0].url;
        history.push(url)
    }

    const artistClick = async (id: number) => {
        let result = await GetMusicById(id);
        setList(result.hotSongs)
        setArtists([])
    }
    return (
        <div className={styles.container}>
            {artists && <div className={styles.artists}>
                {artists.map(item => (
                    <div key={item.picUrl} onClick={() => artistClick(item.id)} className={styles.info}>
                        <img className={styles.pic} src={item.picUrl}></img>
                        <span className={styles.listItem} >歌手：{item.name}</span>
                    </div>
                ))}
            </div>}

            {list && <div className={styles.list}>
                {list.map(item => (
                    <p onClick={() => itemClick(item.id)} className={styles.listItem} key={item.id}>{item.name}</p>
                ))}
            </div>}
        </div>
    )
}

export default connect(({ search }) => ({
    search,
}))(Type1018);