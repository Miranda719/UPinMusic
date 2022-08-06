import { createRef, FC, useEffect, useRef } from "react";
import { Link, NavLink, Outlet } from "@umijs/max";
import TapBar1 from "@/components/Tapbar1";
import NavBar1 from "@/components/NavBar1";
import Search from "@/components/Search";
import Music1 from "@/components/Music1";
import { GetMusicUrl, GetMusicDetail } from '@/services';
import { useRequest } from '@umijs/max';
import {useState} from 'react';
import './index.less'
import { Popup, Space, Button } from 'antd-mobile'
import MusicDetails from '@/components/MusicDetails';
import { connect } from '@umijs/max';

function LayOut({musicDetail,dispatch}){
    const [visible1, setVisible1] = useState(false)
    // const { data, loading } = useRequest(() => GetMusicUrl());
    // const { data: data2, loading: loading2 } = useRequest(() => GetMusicDetail());
    // console.log(data,data2);
    // console.log(MusicDetails);

    // const musicPuse = ()=>{
    //   let value = !musicDetail.isPlay;
    //   dispatch({
    //     type: "musicDetail/upDateIsPlay",
    //     payload:{
    //       isPlay:value
    //     }
    //   });
    // }
    
    return (
        <div className="content">
            <NavBar1></NavBar1>
            <Search></Search>
            <div className="main">
                <Outlet></Outlet>
            </div>
            <TapBar1></TapBar1>
        </div>
    )
}

export default connect(({musicDetail,dispatch})=>({
  musicDetail
}))(LayOut);