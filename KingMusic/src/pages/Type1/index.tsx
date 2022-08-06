import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetMusicUrl, queryMusicList } from '@/services/search';
import { history } from '@umijs/max';
import { connect } from "@/.umi/plugin-dva";
import MusicList from "@/components/MusicList";


const Type1 = ({ search, dispatch }) => {
    const [list, setList] = useState([])
    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setList(result.result.songs) : setList([]);
        console.log(result)
    };
    useEffect(() => {
        getContentList(search.keywords, 1)
    }, [])
    const itemClick = async (id: number) => {
        // history.push(`/qinzhongjin?id=${id}`);
        let result = await GetMusicUrl(id);
        const url = result.data[0].url;
        history.push(url)
    }

    return (
        <div className={styles.container}>
            <MusicList list={list}></MusicList>
        </div>
    )
}

export default connect(({ search }) => ({
    search,
}))(Type1);
