import { request } from '@umijs/max';

//歌曲详细信息
export function GetMusicDetail(id:number){
    return request(`/api/song/detail?ids=${id}`)
}

//歌曲url地址
export function GetMusicUrl(id:number){
    return request(`/api/song/url?id=${id}`);
}

export function Get11111(id:number){
    return request(`/api/playlist/detail?id=${id}`);
}