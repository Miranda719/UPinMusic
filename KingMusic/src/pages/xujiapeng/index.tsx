import React, { useState, useRef } from 'react';
import styles from './index.less';
import './index.less'
import { GetAllList } from '@/services';
import { useRequest, history } from '@umijs/max';
import { Tabs, List, Image, Ellipsis, InfiniteScroll } from 'antd-mobile'
import { PlayOutline, MessageOutline } from 'antd-mobile-icons';
import { useModel } from "@umijs/max";
export default function Page() {
  const {effects,state,audio} = useModel('stores');
  let dataList: any = [
    {
      name: '飙升榜',
      id: 19723756
    },
    {
      name: '新歌榜',
      id: 3779629
    },
    {
      name: '原创榜',
      id: 2884035
    }
  ]
  let [id,setId] = useState(state.musicList.id);
  let [songs, setSongs] = useState<any>([])
  let [da, setda] = useState(19723756)
  let [limit, setLimit] = useState(10);
  let [page, setPage] = useState(1)
  const { data, run, loading, error } = useRequest((d) => {
    // console.log(da, "111111111111111111");

    return GetAllList(da, limit, (page - 1) * limit)
  }, {

    manual: true,
    onSuccess: (data: any, params: any[]) => {
      setSongs([...songs, ...data.songs])
    },
    refreshDeps: [da]
  });

  const getMore = async () => {
    await run(1);
    setPage(page + 1)
  }

  let tochange = (id: any) => {
    history.push(`/pinglun`, id);
  }
  //实现点击播放
  effects.getMusicData({payload:{id}});
  const onClickPLay=(ids:any)=>{
    setId(ids);
        state.isPlay=true;
        if (state.isPlay) {
            setTimeout(() => {
                audio.current?.play();
            }, 300);
            
        } else {
            return false
        }
    
  }


  return (
    <div className='title'>
      <Tabs onChange={(id: any) => {
        setSongs([])
        setda(id);
      }} >
        {dataList.map((item: any) => (
          <Tabs.Tab title={item.name} key={item.id} className='tab'>
            {/* {JSON.stringify(item)} */}
            {songs.length && songs.map((item1: any, index: any) => (
              <List key={index}>
                <List.Item onClick={()=>onClickPLay(item1.id)}
                  prefix={
                    <>
                      <span className='num'> {index + 1}</span>
                      <Image
                        src={item1.al.picUrl}
                        width={50}
                        height={50}
                      />

                    </>
                  }
                  title={
                    <>
                      <span className='name'>{item1.name}</span>
                    </>
                  }
                  description={
                    <>
                      <span className='name2'>
                        <Ellipsis direction='end' content={item1.ar[0].name + '—' + item1.name + (item1.originSongSimpleData == null ? "" : '   |   ' + '原创：' + item1.originSongSimpleData.artists[0].name)} />
                      </span>
                    </>
                  }
                  extra={
                    <>
                      <PlayOutline className='play' />
                      <MessageOutline className='play' onClick={() => tochange(item1.id)} />
                    </>
                  }
                >
                </List.Item>
              </List>

            ))}

          </Tabs.Tab>
        ))}

      </Tabs>

      <InfiniteScroll loadMore={getMore} hasMore={true} tabIndex={0 } />

    </div>
  );
}
