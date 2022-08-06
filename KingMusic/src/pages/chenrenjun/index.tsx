import React, { useEffect,useState  } from 'react';
import styles from './index.less';
import { useRequest } from '@umijs/max';
import { GetMusicDetail,Get11111 } from '@/services';
import { connect } from '@umijs/max';
import { Popup, Space, Button } from 'antd-mobile'
import MusicDetails from '@/components/MusicDetails';
function Page({musicDetail,loading,dispatch}) {
  // const {data,error} = useRequest(()=>{ 
  //   return Get11111() 
  // });

  // console.log(data);
  const [visible1, setVisible1] = useState(false)
  // useEffect(()=>{
  //   dispatch({
  //     type:'musicDetail/getMusicData',
  //     payload:{
  //       id:22
  //     }
  //   })
  // },[])
  
  
  return (
    <div>
      <h1 className={styles.title}>主页 Page index</h1>
     
    </div>
  );
}

export default connect(({musicDetail,loading})=>({
  musicDetail,
  loading:loading.models.musicDetail,
  loadingList:loading.effects['musicDetail/getMusicData']
}))(Page)