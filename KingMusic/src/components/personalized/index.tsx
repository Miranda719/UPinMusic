import React, { FC } from "react";
import styles from './index.less'
import { RightOutline } from 'antd-mobile-icons'
import { Swiper, Image } from 'antd-mobile'
import { history } from '@umijs/max';

const Personalized: FC<HomePersonIProps> = (props) => {

    const items = props.adata.result.map((item: { id: any, name: string, picUrl: string, playCount: number }, index) => (

        <Swiper.Item key={item.id} className={styles.swiperItem} onClick={() => goSongsDetail(item.id)}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <Image src={item.picUrl} className={styles.img}></Image>
                    <div className={styles.playCount}>{parseInt((item.playCount / 10000).toString())}万</div>
                </div>
                <div className={styles.personName}>{item.name}</div>
            </div>
        </Swiper.Item>
    ))

    const goPerDetail = () => {
        history.push("/perDetail")
    }

    const goSongsDetail = (id: any) => {
        history.push(`/songsDetail?id=${id}`)
    }

    return <div>
        <div className={styles.personalized}>
            <div className={styles.recommend}>推荐歌单</div>
            <button className={styles.btn} onClick={() => goPerDetail()}><span>更多<RightOutline /></span></button>
        </div>
        <Swiper slideSize={31} trackOffset={10} stuckAtBoundary={true} indicatorProps={{ style: { display: "none" } }} className={styles.swiper}>
            {items}
        </Swiper>
    </div>
}

export default Personalized