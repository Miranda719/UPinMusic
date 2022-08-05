import { request } from '@umijs/max';

export function GetDefault(){
    return request('api/search/default')
}


export function GetHot(){
    return request('api/playlist/hot')
}

export function queryMusicList({ keywords='default', type = 1 }) {
    return request(`/api/search?keywords=${keywords}&type=${type}`);
}

