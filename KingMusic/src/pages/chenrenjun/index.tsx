import React, { useState } from 'react';
import { useRequest } from '@umijs/max';
import { Getlist, GetBanner, GetToplist, GetArtist, logStatus,Layout } from '@/services';
import Banner from '@/components/banner';
import HotPlayList from '@/components/hotplaylist';
import Personalized from '@/components/personalized';

function Page() {
  const [key, setKey] = useState(5001);
  const [visible1, setVisible1] = useState(false)

  const { data: ldata, error, loading: lloading } = useRequest(() => {
    return Getlist()
  });

  const { data: bdata, loading: bloading } = useRequest(() => {
    return GetBanner()
  });

  const { data: tdata, loading: tloading } = useRequest(() => {
    return GetToplist()
  });

  const { data: adata, loading: aloading } = useRequest(() => {
    return GetArtist()
  });

  // const { data: data, loading: loading } = useRequest(() => {
  //   return Layout()
  // });

  // console.log(data);

  return (
    <div>
      {bdata && <Banner banner={bdata}></Banner>}
      {adata && <Personalized adata={adata}></Personalized>}
      {tdata && <HotPlayList tdata={tdata} changeTabs={(key: number) => setKey(key)}></HotPlayList>}
    </div>
  );
}

export default Page