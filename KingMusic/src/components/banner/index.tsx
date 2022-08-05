import React,{ FC } from "react";
import { Swiper } from "antd-mobile";
import styles from "./index.less"

const Banner: FC<HomeCarouselIProps> = (props) => {
    return <Swiper autoplay loop>
        {props.banner.banners.map((item, idx) => (
            <Swiper.Item key={idx}>
                <div className={styles.content}>
                    <img
                        className={styles.img}
                        src={item.pic}
                        alt=""
                    />
                </div>

            </Swiper.Item>
        ))}
    </Swiper>
}

export default Banner