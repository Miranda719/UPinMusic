import React, { FC, useState } from "react";
import styles from './index.less';
import { GetMusicById, GetMusicUrl } from '@/services/search';
import { history } from '@umijs/max';

type Props = {
    result?: any
}



const Type1: FC<Props> = (props) => {
    const [list, setList] = useState(props.result.song.songs);
    const [artists, setArtists] = useState(props.result.artist.artists)

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
        console.log(result)
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

export default Type1;