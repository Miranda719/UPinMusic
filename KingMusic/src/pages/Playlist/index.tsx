import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetPlaylist } from '@/services/search';
import MusicList from "@/components/MusicList";
import { useParams } from "@umijs/max";

const Playlist = () => {
    const [list, setList] = useState([])
    const params=useParams();
    
    const getList = async (id:any) => {
        let result=await GetPlaylist(id);
        result.code === 200 ? setList(result.songs) : setList([]);
        // console.log(result,'sssssssssssssssssssss')
    };
    useEffect(() => {
        getList(params.id)
    }, [])

    return (
        <div className={styles.container}>
            <MusicList list={list}></MusicList>
        </div>
    )
}

export default Playlist;
