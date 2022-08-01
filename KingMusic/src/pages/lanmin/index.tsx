import React from 'react';
import styles from './index.less';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';


export default function Page() {
  const { Search } = Input;
  const onSearch = (value: any) => console.log(value);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 304,
      }}
    />
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
  return (
    <div>
      <h1 className={styles.title}>
        ceshitest
      </h1>
    </div>
  );
}
