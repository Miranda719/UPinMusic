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

export function GetMusicUrl(id=0) {
    return request(`/api/song/url?id=${id} `);
}

export function GetMusicById(id=0) {
    return request(`api/artists?id=${id}`);
}
