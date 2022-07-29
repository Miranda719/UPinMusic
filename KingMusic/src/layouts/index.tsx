import { FC } from "react";
import { Link, NavLink, Outlet } from "@umijs/max";
import TapBar1 from "@/components/Tapbar1";
import NavBar1 from "@/components/NavBar1";
import Search from "@/components/Search";
import Music1 from "@/components/Music1";
import './index.less'
const LayOut: FC = () => {
    return (
        <div className="content">
            <NavBar1></NavBar1>
            <Search></Search>
            <div className="main">
                <Outlet></Outlet>
            </div>
            <Music1></Music1>
            <TapBar1></TapBar1>
        </div>
    )
}

export default LayOut;