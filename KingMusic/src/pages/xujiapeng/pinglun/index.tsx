import React, { useState, useRef } from 'react';
import styles from './index.less';
import './index.less'
import { GetPinglun } from '@/services';
import { useRequest, history, useLocation } from '@umijs/max';
import { Tabs, List, Image, Ellipsis, InfiniteScroll, NavBar } from 'antd-mobile'
import { LikeOutline } from 'antd-mobile-icons'
export default function Page() {
    const a = useLocation().state
    // console.log(a);
    const { data, loading, error } = useRequest(() => {
        return GetPinglun(a)
    });
    const back = () => {
        history.push("/xujiapeng");
    }
    console.log(data)
    return (
        <div className='title'>
            <NavBar onBack={back}>
                <span className='span'>{"评论区"}</span>
            </NavBar>

            <Tabs stretch={false} activeLineMode={"fixed"} className='tab' style={{ "--title-font-size": "10px", "--fixed-active-line-width": "0px" }}>

                <Tabs.Tab title={"最热"} key={"最热"}>

                    {!loading && data.hotComments.map((item: any, index: any) => (
                        <List key={index}>
                            <List.Item >
                                <div className='video'>
                                    <Image
                                        src={item.user.avatarUrl}
                                        width={40}
                                        height={40}
                                        style={{ borderRadius: 32 }}
                                        fit='cover'
                                        alt={item.user.nickname}
                                    />
                                    {item.pendantData == null
                                        ?
                                        undefined
                                        :
                                        <Image
                                            src={item.pendantData.imageUrl == null ? undefined : item.pendantData.imageUrl}
                                            width={50}
                                            height={50}
                                            style={{ borderRadius: 32 }}
                                            fit='cover'
                                            className='image'
                                        />
                                    }

                                    <span className='nickname'>
                                        {item.user.nickname}
                                    </span>
                                    <p className='timeStr'>
                                        {item.timeStr}
                                    </p>
                                    <p className='icons'>
                                        <span className='likedCount'>
                                            {item.likedCount}
                                        </span>

                                        <LikeOutline />
                                    </p>
                                </div>
                                <div className='content-v'>
                                    <p className='content'>
                                        {item.content}
                                    </p>
                                </div>

                            </List.Item>
                        </List>
                    ))}
                </Tabs.Tab>
                <Tabs.Tab title={"最新"} key={"最新"}>
                    {!loading && data.comments.map((item1: any, index: any) => (
                        <List key={index}>
                            <List.Item >
                                <div className='video'>
                                    <Image
                                        src={item1.user.avatarUrl}
                                        width={40}
                                        height={40}
                                        style={{ borderRadius: 32 }}
                                        fit='cover'
                                        alt={item1.user.nickname}
                                    />
                                    {item1.pendantData == null
                                        ?
                                        undefined
                                        :
                                        <Image
                                            src={item1.pendantData.imageUrl == null ? undefined : item1.pendantData.imageUrl}
                                            width={50}
                                            height={50}
                                            style={{ borderRadius: 32 }}
                                            fit='cover'
                                            className='image'
                                        />
                                    }

                                    <span className='nickname'>
                                        {item1.user.nickname}
                                    </span>
                                    <p className='timeStr'>
                                        {item1.timeStr}
                                    </p>
                                    <p className='icons'>
                                        <span className='likedCount'>
                                            {item1.likedCount}
                                        </span>

                                        <LikeOutline />
                                    </p>
                                </div>
                                <div className='content-v'>
                                    <p className='content'>
                                        {item1.content}
                                    </p>
                                </div>

                            </List.Item>
                        </List>
                    ))}
                </Tabs.Tab>

            </Tabs>

        </div>
    );
}
