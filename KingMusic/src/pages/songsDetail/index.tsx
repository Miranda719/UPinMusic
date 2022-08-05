import React from 'react';
import { useRequest } from '@umijs/max';
import { GetSongsDetail } from '@/services';
import styles from './index.less'
import { useLocation } from '@umijs/max';
import SongsDetail from '@/components/songsDetail';



export default function Page() {

    const location = useLocation()

    const { data: sdata, loading: sloading } = useRequest(() => {
        return GetSongsDetail(location.search)
    });

    return (
        <div>
            {sdata && <SongsDetail sdata={sdata}></SongsDetail>}
        </div>
    )
}