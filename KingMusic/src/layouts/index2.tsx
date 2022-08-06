import {  Outlet } from "@umijs/max";
import TapBar1 from "@/components/Tapbar1";
import NavBar1 from "@/components/NavBar1";
import Search from "@/components/Search";
import './index.less'
import { useState } from "react";

function LayOut(){
    const [datas,setDatas]=useState(1);
    return (
        <div className="content" onClick={()=>setDatas(datas+1)}>
            <NavBar1>
                <div>
                {document.title}
                </div>
            </NavBar1>
            <Search></Search>
            <div className="main">
                <Outlet></Outlet>
            </div>
            <TapBar1></TapBar1>
        </div>
    )
}

export default LayOut;