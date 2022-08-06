import { connect } from "@/.umi/plugin-dva";
import { queryMusicList, GetProgramDetail,GetPrograms } from "@/services/search";
import React, { FC, useEffect, useState } from "react";
import styles from './index.less';
import { history } from '@umijs/max';
const Type1009 = ({ search }) => {
    const [list, setList] = useState([])
    const [programs,setPrograms]= useState([])

    const getContentList = async (keywords: string, type: number) => {
        let result = await queryMusicList({ keywords: keywords, type: type });
        result.code === 200 ? setList(result.result.djRadios) : setList([]);
        // console.log(result)
    };
    
    const itemClick = async (id: number) => {
        let result = await GetPrograms(id);
        result.code === 200 ? setPrograms(result.programs) : setPrograms([]);
        // console.log(result,'xxxxxxxxxxxx')
    }

    const programClick=async(id:number)=>{
        let result=await GetProgramDetail(id);
        // let url;
        // result.code === 200 ? url=result.data.url : '';
        // history.push(url)
        console.log(result,'xxxxxxxxxxxx')
    }
    useEffect(() => {
        getContentList(search.keywords, 1009)
    }, [])

    if (programs && programs.length>0) {
        return (
            <div>
                {programs && <div className={styles.djs}>
                    {programs.map(item => (
                        <div onClick={() => programClick(item.id)} key={item.id} className={styles.info}>
                            <img className={styles.pic} src={item.dj.avatarUrl}></img>
                            <span className={styles.listItem} >{item.mainSong.name}</span>
                        </div>
                    ))}
                </div>}
            </div>
        )
    }
    else {
        return (
            <div >
                {list && <div className={styles.list}>
                    {list.map(item => (
                        <div key={item.id} className={styles.itemBox}>
                            <img className={styles.pic} onClick={() => itemClick(item.id)} src={item.picUrl}></img>
                            <span className={styles.listItem} >{item.name}</span>
                        </div>
                    ))}
                </div>}
            </div>
        )
    }

}

export default connect(({ search }) => ({
    search,
}))(Type1009);