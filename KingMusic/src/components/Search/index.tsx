import React,{ FC } from "react";
import './index.less';
import { SearchBar } from 'antd-mobile';
const Search:FC = () =>{
    return (
        <div className="search-box">
            <SearchBar placeholder='请输入内容' />
        </div>
    )
}

export default Search;