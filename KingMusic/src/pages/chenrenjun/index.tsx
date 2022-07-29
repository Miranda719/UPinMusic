import React from 'react';
import styles from './index.less';
import { useRequest } from '@umijs/max';
import { Getlist } from '@/services';

export default function Page() {
  const {data,error,loading} = useRequest(()=>{ 
    return Getlist() 
  });

  console.log(data);
  
  
  return (
    <div>
      <h1 className={styles.title}>主页 Page index</h1>
    </div>
  );
}
