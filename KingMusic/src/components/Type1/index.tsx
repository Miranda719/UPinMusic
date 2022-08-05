import React, { FC } from "react";
import styles from './index.less';
import { GetMusicUrl } from '@/services/search';
import { history } from '@umijs/max';

type Props = {
    result?: any
}

const itemClick = async (id: number) => {
    // history.push(`/qinzhongjin?id=${id}`);
    let result = await GetMusicUrl(id);
    const url = result.data[0].url;
    // console.log(url, 'hhhhhhhhhhhhhhhhhhhhhhh')
    history.push(url)
}
const Type1: FC<Props> = (props) => {
    const list = props.result.songs
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

export default Type1;