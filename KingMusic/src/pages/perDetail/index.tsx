import React from 'react';
import { useRequest } from '@umijs/max';
import { GetArtistAll } from '@/services';
import styles from './index.less'
import PerDetails from '@/components/perDetails';


export default function Page() {


    const { data: aadata, loading: aaloading } = useRequest(() => {
        return GetArtistAll()
    });

    return (
        <div>
            {aadata && <PerDetails aadata={aadata}></PerDetails>}
        </div >
    )
}