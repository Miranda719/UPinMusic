import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { GetUser } from '@/services/search';
import { useParams } from "@umijs/max";

const User = () => {
    const [user, setUser] = useState({})
    const params = useParams();

    const getList = async (uid: any) => {
        let result = await GetUser(uid);
        result.code === 200 ? setUser(result.profile) : setUser([]);
        console.log(result)
    };
    useEffect(() => {
        getList(params.uid)
    }, [])

    return (
        <div className={styles.artists}>

            <div className={styles.info}>
                <img className={styles.pic} src={user.avatarUrl}></img>
                <span className={styles.listItem} >歌手：{user.artistName}</span>
            </div>

        </div>
    )
}

export default User;
