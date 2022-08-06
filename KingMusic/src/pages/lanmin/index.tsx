import React, { useEffect, useState, useContext, useReducer } from 'react';
import styles from './index.less';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Tabs } from 'antd';
import { GetDefault, queryMusicList, GetHot } from '@/services/search';
import {Outlet} from '@umijs/max';
import { useNavigate } from 'react-router-dom'
import { connect } from '@/.umi/plugin-dva';


function Page({ search, dispatch }) {
  let navigate = useNavigate();
  // 默认搜索关键词
  const [defaultKwd, setDefaultKwd] = useState('')
  // 关键词
  const [keywords, setKeywords] = useState('')
  // 热门标签
  const [hot, setHot] = useState([])
  // 内容列表
  const [content, setContent] = useState(null)
  // 搜索类型
  const [type, setType] = useState(1)

  const selectType = [{ name: '单曲', type: 1 }, { name: '综合', type: 1018 }, { name: '歌手', type: 100 },
  { name: '专辑', type: 10 }, { name: '视频', type: 1014 }, { name: '歌单', type: 1000 }, { name: '用户', type: 1002 },
  { name: 'MV', type: 1004 }, { name: '歌词', type: 1006 }, { name: '电台', type: 1009 }, { name: '声音', type: 2000 }]
  const { TabPane } = Tabs;

  const [child, setChild] = useState(<div></div>)

  const getContentList = async (keywords: string, type: number) => {
    let result = await queryMusicList({ keywords: keywords, type: type });
    result.code === 200 ? setContent(result) : setContent(null);
    // 路由跳转
    navigate(`/lanmin/type${type}`)

    dispatch({
      type: 'search/save',
      //payload 有效负载 ，dispatch传递参数的时候
      payload: {
        keywords: keywords,
      },
    }
    )
  };

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#aaa',
      }}
    />
  );

  useEffect(() => {
    getDefault();
    getHotList();
  }, []);

  const getDefault = async () => {
    let result = await GetDefault();
    let kwd = result.data.realkeyword;
    setDefaultKwd(kwd)
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value
    setKeywords(val)
    if (val === '') {
      setType(1)
      getContentList(val, type)
    }
  }
  const onSearch = () => {
    getContentList(keywords, type)
  }

  const getHotList = async () => {
    let result = await GetHot();
    setHot(result.tags)
  };

  const tabClick = (e: any) => {
    let target = selectType.filter((item) => item.name === e.target.innerText)
    setType(target[0].type);
    getContentList(keywords, target[0].type);
  }

  const hotClick = (kwd: string) => {
    setKeywords(kwd);
    getContentList(kwd, type)
  }


  const historyClick = (kwd: string) => {
    setKeywords(kwd);
    getContentList(kwd, type)
  }
  const searchBar = (
    <h1 className={styles.title}>
      {/* 搜索框 */}
      <div className={styles.inputBox}>
        <Input
          placeholder={defaultKwd}
          className={styles.input}
          prefix={prefix}
          allowClear
          onChange={inputChange}
          onPressEnter={onSearch}
          value={keywords}
        />
        <span className={styles.searchBar} onClick={onSearch}>搜索</span>
      </div>
    </h1>
  )

  if (content) {
    return (
      <div>
        {searchBar}

        <div className={styles.container}>
          {/* 分类选择 */}
          <Tabs defaultActiveKey="1" onTabClick={() => (tabClick(event))}>
            {selectType.map(item => (
              <TabPane tab={item.name} key={item.type}></TabPane>
            ))}
          </Tabs>

          {/* 搜索列表 */}
          {/* {child} */}
          <Outlet></Outlet>
        </div>

      </div>
    );
  }
  else {
    return (
      <div>
        {searchBar}
        <div className={styles.container}>
          <div>
            {search.history.length > 0 && <div className={styles.listBox}>
              <div>搜索历史</div>
              {search.history.map(item => (
                <span className={styles.hotList} onClick={() => historyClick(item)} key={item}>{item}</span>
              ))}
            </div>}
          </div>
          {/* 热门搜索 */}
          {hot && <div className={styles.listBox}>
            <div>热门搜索</div>
            {hot.map(item => (
              <span onClick={() => hotClick(JSON.stringify(item.name).replace(/\"/g, ''))} className={styles.hotList} key={item.name}>{JSON.stringify(item.name).replace(/\"/g, '')}</span>
            ))}
          </div>}
        </div>

      </div>
    );
  }
}

export default connect(({ search }) => ({
  search,
}))(Page);
