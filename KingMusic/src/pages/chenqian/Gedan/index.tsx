import { history } from "@umijs/max";
import { FC, useState } from "react";
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
  console.log(location.state.id, "1111111111111111")
  let [page, setPage] = useState(1);
  let [limit, setLmit] = useState(10)
  let [songs, setSongs] = useState<any>([])
  const { data, loading, run, error } = useRequest(() => {
    return gedanD(location.state.id, limit, (page - 1) * limit)
  }, {
    manual: true,
    onSuccess: (data: any, params: any[]) => {
      console.log("3333333333333")
      setSongs([...songs, ...data.songs])
      console.log(songs, "00000000000");
    }
  })
  const getMore = async () => {
    await run()
    // setAbc(false)
    setPage(page + 1)
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
        {!loading && songs.map((item: any, index: any) => (
          <ul className={styles.songs} key={item.id}>
            <li>
              <span className={styles.xuhao}>{index + 1}</span>
              <img src={item.al.picUrl} width={50} height={50} />
              <span className={styles.geming} >{item.name}</span>
              <PlayOutline className={styles.q} fontSize={15} />
              <p className={styles.songslist}>{item.ar[0].name}--{item.al.name}</p>
            </li>
          </ul>

        ))}
      </List>
      <InfiniteScroll loadMore={getMore} hasMore={true} tabIndex={0} />
    </div>
  )
}



