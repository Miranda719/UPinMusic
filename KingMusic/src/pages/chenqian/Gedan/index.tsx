import { history } from "@umijs/max";
import { FC, useEffect, useState } from "react";
import { useRequest } from '@umijs/max';
import { gedanD, likelList, LilistD, UsermusicL } from "@/services";
import { InfiniteScroll, List, NavBar, Space, Tabs, Toast } from "antd-mobile";
import styles from './index.less';
import { MoreOutline, PlayOutline, SearchOutline } from "antd-mobile-icons";
import { useLocation } from "@umijs/max";
import { useParams } from "@umijs/max";
import { useSearchParams } from "@umijs/max";
export default function Page() {
  const location: any = useLocation()
  let [page, setPage] = useState(1);
  let [limit, setLmit] = useState(10)
  let [songs, setSongs] = useState<any>([])
  let [manua,setManua]=useState(true)
  const { data, loading, run, error } = useRequest(() => {
    return gedanD(location.state.id, limit, (page - 1) * limit)
  }, {
    
    onSuccess: (data: any, params: any[]) => {
  //     setSongs([...songs, ...data.songs]);
  //     console.log(songs.length);
  //     if(songs.length>50){
  //       setTf(false)
  //     }
      
  //   }
  // });
  // console.log(songs.length);
      setSongs([...songs!, ...data.songs])
    },
    manual: manua
  })
  const getMore = async () => {
    setPage(page + 1)
    await run();
    
  }
  
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  )
  const back = () => {
    history.go(-1)
  }

  return (
    <div>
      <NavBar className={styles.navbar} right={right} onBack={back}>
        歌单
      </NavBar>
      {/* 是否还有更多数据：{!noMore?"有":"没有"} */}
      <List>
      <ul >
        {songs.map((item: any, index: any) => (
            <li className={styles.songs} key={item.id}>
              <span className={styles.xuhao}>{index + 1}</span>
              <img src={item.al.picUrl} width={50} height={50} />
              <span className={styles.geming} >{item.name}</span>
              <PlayOutline className={styles.q} fontSize={15} />
              <p className={styles.songslist}>{item.ar[0].name}--{item.al.name}</p>
            </li>
        ))}
        </ul>
      </List>
      <InfiniteScroll loadMore={getMore} hasMore={true} tabIndex={-10} />
    </div>
  )
}



