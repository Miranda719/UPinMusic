import React, { FC, useState } from "react";
import styles from './index.less'
import { useRequest } from '@umijs/max';
import { history } from '@umijs/max';
import { Grid, Image, InfiniteScroll, List, PullToRefresh } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'

const PerDetails: FC<HomePersonAllIProps> = (props) => {


    const goSongsDetail = (id: any) => {
        history.push(`/songsDetail?id=${id}`)
    }

    const items = props.aadata.result.map((item: { id: any, name: string, picUrl: string, playCount: number }, index: any) => (
        <Grid.Item key={item.id} className={styles.container} onClick={() => goSongsDetail(item.id)}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <Image src={item.picUrl} className={styles.img}></Image>
                    <div className={styles.playCount}>{parseInt((item.playCount / 10000).toString())}万</div>
                </div>
                <div className={styles.personName}>{item.name}</div>
            </div>
        </Grid.Item>
    ))

    // let current = 1

    // function getNextData() {
    //     const ret: string[] = []
    //     for (let i = 0; i < 18; i++) {
    //         ret.unshift(current.toString())
    //         current++
    //     }
    //     return ret
    // }

    // const [data, setData] = useState(() => getNextData())

    return <div className={styles.mains}>
        {/* <PullToRefresh
            onRefresh={async () => {
                await sleep(1000)
                setData([...getNextData(), ...data])
            }}
        > */}
        <Grid columns={3} gap={8}>
            {items}
        </Grid>
        {/* </PullToRefresh> */}
    </div>
}

export default PerDetails