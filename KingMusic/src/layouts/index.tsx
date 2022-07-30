import { FC } from "react";
import {  Outlet } from "@umijs/max";

const LayOut2:FC = ()=>{
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default LayOut2;