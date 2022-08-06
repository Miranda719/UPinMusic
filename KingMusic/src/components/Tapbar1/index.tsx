import React,{ FC } from "react";
import {Badge, TabBar } from 'antd-mobile';
import {
    AppOutline,
    MessageOutline,
    UnorderedListOutline,
    UserOutline,
  } from 'antd-mobile-icons';
import './index.less';
import { history } from "@umijs/max";
const TapBar1:FC = ()=>{
    const tabs = [
        {
          key: '',
          title: '首页',
          icon: <AppOutline />,
          badge: Badge.dot,
        },
        {
          key: 'xujiapeng',
          title: '热门歌曲',
          icon: <UnorderedListOutline />,
          badge: '5',
        },
        {
          key: 'chenqian',
          title: '我的',
          icon: <UserOutline />,
        },
      ];

      const sethistory = (value:string)=>{
        history.push(value);
      }
    return (
        <div className="tapbar-box">
            <TabBar onChange={(value)=>sethistory(value)} activeKey={location.pathname}>
          {tabs.map(item => (
            <TabBar.Item key={`/`+item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
        </div>
    )
}

export default TapBar1;