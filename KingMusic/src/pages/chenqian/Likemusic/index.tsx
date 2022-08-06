import { history } from "@umijs/max";
import { FC } from "react";
import { useRequest } from '@umijs/max';
import { likelList, LilistD } from "@/services";
import { List, NavBar, Space, Tabs, Toast } from "antd-mobile";
import styles from './index.less';
import { MoreOutline, PlayOutline, SearchOutline } from "antd-mobile-icons";
export default function Page() {
    // const goMusicDetail = ()=>{
    //     history.push('/qinzhonjin')
    // }
   
    const { data, error, loading } = useRequest(() => {
        return likelList()
    });
    console.log(data)
    const abc = !loading && data.id
    const { data: data2, loading: loading2 } = useRequest(() => {
        return LilistD(abc)
    }, { refreshDeps: [data] })

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
            <div className={styles.xhgd}>
            {!loading2 && data2.songs.map((item: any,index:any) => (
                <ul className={styles.songs} key={item.id}>
                    <li>
                       <span className={styles.xuhao}>{index+1}</span>
                        <img src={item.al.picUrl} width={50} height={50} />
                        <span className="geming" >{item.name}</span>
                        <PlayOutline className={styles.q} fontSize={15}/>
                        <p className={styles.songslist}>{item.ar[0].name}--{item.al.name}</p>
                    </li>
                </ul>
            ))}
            </div>
            
            {/* {!loading && JSON.stringify(data.ids)}
            {!loading2 && JSON.stringify(data2.songs)} */}
        </div>
    )
}


