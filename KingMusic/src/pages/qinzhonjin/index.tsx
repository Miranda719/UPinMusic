import React from 'react';
import styles from './index.less';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button>点击发送请求</button>
    </div>
  );
}
