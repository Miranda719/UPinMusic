import React, { Key, useEffect, useRef, useState } from 'react';
import styles from './index.less';
import { Image, Avatar, List, Tabs, Modal, Toast, Popup, Button, Input } from 'antd-mobile'
import { useRequest } from '@umijs/max';
import { CreateD, DeleteD, detailList, gedanD, UserML, UsermusicL } from '@/services';
import { AddOutline, EditSOutline, HeartFill, PlayOutline, SoundOutline } from 'antd-mobile-icons';
import { Outlet } from '@umijs/max';
import { history } from "@umijs/max";
import Likemusic from './Likemusic';
import Recentmusic from './Recentmusic'
import Gedan from './Gedan'
import { useLocation } from '@umijs/max';
import imgs from '@/assets/images/xuanxiang.png'
import xindong from '@/assets/images/xindong.png'
export default function Page() {
  const [id1, setId1] = useState<any>()
  const { data: data, error, loading } = useRequest(() => {
    return detailList()
  });

  const { data: data2, loading: loading2 } = useRequest(() => {
    return UsermusicL()
  }, {
    refreshDeps: [id1]
  });

  const { data: data3, loading: loading3 } = useRequest(() => {
    return CreateD(Input)
  })

  const { data: data4, loading: loading4 } = useRequest(() => {
    return DeleteD(id1)
  },
    { refreshDeps: [id1] }
  );

  const { data: data5, loading: loading5 } = useRequest(() => {
    return UserML()
  })
  const crePc = !loading5 && data5.createdPlaylistCount
  const xihuan = !loading2 && data2.playlist.slice(0, 1)
  const creatm = !loading2 && data2.playlist.slice(1, 8)
  const shoucangm = !loading2 && data2.playlist.slice(8)
  // console.log(data)
  const userDetailist = !loading && data.profile
  // const goLikemusic = () => {
  //   history.push('/Likemusic')
  // }
  const goRencentmusic = () => {
    history.push('/Recentmusic')
  }
  const goGedan = (id: any) => {
    history.push('/Gedan', { id: id })
  }
  const goSingple = () => {
    history.push('/Singple')
  }
  const deletC = (id: any) => {
    console.log(id)
    setId1(id)
  }
  const creatL = () => {

  }

  // console.log(data2.playlist[0].id)
  const [visible2, setVisible2] = useState(false)
  const [visible1, setVisible1] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.touxiang}>
        <Image className={styles.avatar} src={userDetailist.avatarUrl}
          width={80}
          height={80}
          // fit='cover'
          style={{ borderRadius: 40 }}
          onClick={() => goSingple()}
        />
        <h2 className={styles.nickname}>{userDetailist.nickname}</h2>
      </div>
      <div className={styles.mylove}>
        <ul>
          <li ><HeartFill fontSize={20}></HeartFill>
            <p>我的喜欢</p>
          </li>
          <li> <PlayOutline fontSize={20}> </PlayOutline>
            <p>本地音乐</p></li>
          <li onClick={() => goRencentmusic()}> <SoundOutline fontSize={20}></SoundOutline>
            <p>最近播放</p></li>
        </ul>

      </div>
      <div className={styles.mylike}>
        {!loading2 && xihuan.map((item: any, index: number) => (
          <div key={item.id} >
            <img src={item.coverImgUrl} className={styles.coverImgUrl} width={50} height={50} onClick={() => goGedan(item.id)} />
            <span className={styles.geming} >我喜欢的音乐</span>
            <p className={styles.songslist}>{item.trackCount}首</p>
            <div className={styles.xindong}>
            <img src={xindong} width={15}></img>
            心动模式
            </div>  
            
          </div>))}
      </div>
      <div className={styles.list}>
        <Tabs className={styles.fixed1} >
          <Tabs.Tab title='创建歌单' key='fruits'>
            <ul className={styles.songs}>
              <li className={styles.aa}>
                <span className={styles.chuangjian}>创建歌单({creatm.length}个)</span>
                <AddOutline className={styles.add} onClick={() => setVisible1(true)} />
                <Popup visible={visible1} onMaskClick={() => { setVisible1(false) }} bodyStyle={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', minHeight: '40vh', }}
                >
                  <div className={styles.pop}>
                    <span className={styles.quxiao}>取消</span>
                    <span className={styles.wancheng}>完成</span>
                  </div>

                  <Input className={styles.shuru} placeholder='输入新建歌单标题' clearable />
                </Popup>
                <EditSOutline className={styles.edit} />
              </li>
              {!loading2 && creatm.map((item: any, index: number) => (
                <li key={item.id} >
                  <img src={item.coverImgUrl} width={50} height={50} onClick={() => goGedan(item.id)} />
                  <span className={styles.geming}>{item.name}</span>
                  {/* <EditSOutline className={styles.delet} onClick={() => deletC(item.id)} /> */}
                  {/* <EditSOutline className={styles.delet} onClick={() => setVisible2(true)} /> */}
                  <img src={imgs} className={styles.delet} onClick={() => deletC(item.id)} />

                  {/* <Popup visible={visible2} onMaskClick={() => { setVisible2(false) }} bodyStyle={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px', minHeight: '40vh', }}
                  >
                    <p>歌单:{item.name}</p>
                    <p onClick={() => deletC(item.id)}>删除</p>

                  </Popup> */}
                  {/* <PlayOutline className={styles.q} fontSize={15}/> */}
                  <p className={styles.songslist}>{item.trackCount}首</p>
                </li>
              ))}
            </ul>
          </Tabs.Tab>
          <Tabs.Tab title='收藏歌单' key='vegetables'>
            <ul className={styles.songs}>
              <li className={styles.aa} >
                <span className={styles.chuangjian}>收藏歌单({shoucangm.length}个)</span>
                <EditSOutline className={styles.edit2} />
              </li>
              {!loading2 && shoucangm.map((item: any, index: number) => (

                <li key={item.id} >
                  <img src={item.coverImgUrl} width={50} height={50} onClick={() => goGedan(item.id)} />
                  <span className={styles.geming}>{item.name}</span>
                  {/* <EditSOutline className={styles.delet} /> */}
                  <img src={imgs} className={styles.delet} onClick={() => deletC(item.id)} />
                  {/* <PlayOutline className={styles.q} fontSize={15}/> */}
                  <p className={styles.songslist}>{item.trackCount}首</p>
                </li>
              ))}
            </ul>
          </Tabs.Tab>

        </Tabs>

      </div>


      {/* {!loading && JSON.stringify(data.profile)} */}
    </div>
  );
}

