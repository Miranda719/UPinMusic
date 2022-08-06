import React,{ FC } from "react";
import './index.less';
import { SearchBar } from 'antd-mobile';
import { history } from "@/.umi/exports";
const Search:FC = () =>{
    const goToSearch=()=>{
        console.log('xxxxxxxxxxx');
        history.push('/lanmin')
    }
    return (
        <div className="search-box" onClick={()=>goToSearch()}>
            <SearchBar placeholder='请输入内容'/>
        </div>
    )
}

export default Search;