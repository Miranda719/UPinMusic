import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Col, Divider, Row } from 'antd';
import { GetDefaultSearch } from '@/services/search';


export default function Page() {
  const { Search } = Input;
  const [defaultKwd, setDefaultKwd] = useState('')
  const onInput = (value: any) => console.log(value);
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
  }, []);

  const getDefault = async () => {
    let result = await GetDefaultSearch();
    let kwd = result.data.realkeyword;
    setDefaultKwd(kwd)
    console.log(kwd);
  };

  return (
    <div>
      <h1 className={styles.title}>
        <div className={styles.inputBox}>
          <Input
            placeholder={defaultKwd}
            className={styles.input}
            prefix={prefix}
            allowClear
            onInput={onInput}
          />
          <span className={styles.searchBar}>搜索</span>
        </div>
      </h1>
    </div>
  );
}
