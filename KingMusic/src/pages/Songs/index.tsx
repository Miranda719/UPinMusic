import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetAlbumDetail } from '@/services/search';
import MusicList from "@/components/MusicList";
import { useParams } from "@umijs/max";

const Songs = () => {
    const [list, setList] = useState([])
    const params=useParams();
    
    const getList = async (id:any) => {
        let result=await GetAlbumDetail(id);
        result.code === 200 ? setList(result.songs) : setList([]);
        console.log(result)
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

export default Songs;
