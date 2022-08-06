import React, { FC, useState } from "react";
import styles from './index.less'
import { Mask, Image, Grid, Tag, List } from 'antd-mobile'
import { PlayOutline, CloseOutline } from 'antd-mobile-icons'



const SongsDetail: FC<SongsDetailIProps> = (props) => {

    const items = props.sdata.playlist.tags.map((item: any, index: any) => {
        return <Tag color='#2db7f5' round key={index} className={styles.tag}>{item}</Tag>
    })

    const WithContent: FC = () => {
        const [visible, setVisible] = useState(false)
        return (
            <>
                <Mask visible={visible} onMaskClick={() => setVisible(false)} color={"black"} >
                    <div className={styles.close} onClick={() => setVisible(false)}>
                        <CloseOutline className={styles.closeIcon} />
                    </div>
                    <div className={styles.overlayContent}>
                        <Image src={props.sdata.playlist.coverImgUrl} className={styles.overlyImg}></Image>
                        <div className={styles.overlayName}>{props.sdata.playlist.name}</div>
                    </div>
                    <div className={styles.overlyTags}>标签：
                        <Grid columns={4} gap={8} className={styles.overlyAllTags}>
                            {items}
                        </Grid>
                    </div>

                    <div className={styles.overlyDesc}>{props.sdata.playlist.description}</div>
                </Mask>
                <div className={styles.description} onClick={() => setVisible(true)}>{props.sdata.playlist.description}</div>
            </>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Image src={props.sdata.playlist.coverImgUrl} className={styles.img}></Image>
                    <div className={styles.playCount}><PlayOutline /> {parseInt((props.sdata.playlist.playCount / 10000).toString())}万</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{props.sdata.playlist.name}</div>
                    <div className={styles.authorDetail}>
                        <Image src={props.sdata.playlist.creator.avatarUrl} className={styles.authorImg}></Image>
                        <Image src={props.sdata.playlist.creator.avatarDetail.identityIconUrl} className={styles.identityIcon}></Image>
                        <span className={styles.authorName}>{props.sdata.playlist.creator.nickname}</span>
                    </div>
                    <WithContent />
                </div>
            </div>

            <div className={styles.listBox}>
                <div className={styles.playlist}>播放列表</div>
                <List className={styles.list}>
                    {props.sdata.playlist.tracks.map((item: any, idx: any) => (
                        <List.Item
                            key={item.id}
                            className={styles.itemlist}
                            prefix={
                                <Image
                                    src={item.al.picUrl}
                                    className={styles.img}
                                    fit='cover'
                                    width={50}
                                    height={50}
                                />
                            }
                        >
                            <div className={styles.right}>
                                <div className={styles.listNo}>{idx + 1}</div>
                                <div className={styles.listTitle}>
                                    <div className={styles.listName}>{item.name}</div>
                                    <div className={styles.arName}>
                                        {item.ar.map((its: any) => {
                                            return <span key={its.id}>{its.name}&nbsp;/&nbsp;</span>
                                        })}
                                        - {item.name}
                                    </div>
                                </div>
                            </div>

                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    )

}

export default SongsDetail