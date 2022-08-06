import { Link, NavLink, Outlet } from "@umijs/max";
import TapBar1 from "@/components/Tapbar1";
import NavBar1 from "@/components/NavBar1";
import Search from "@/components/Search";
import {useState} from 'react';
import './index.less'


function LayOut(){
    const [visible1, setVisible1] = useState(false);
    
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

export default LayOut;