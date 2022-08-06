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

export function Getlist() {
    return request('/api/song/detail?ids=347230,347231')
}
// 

export function GetBanner() {
    return request('/api/banner?type=1')
}

export function GetToplist() {
    return request('/api/playlist/hot')
}

export function GetPlayList(id: number, limit = 10, offset = 0) {
    return request(`api/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`)
}


export function GetArtist() {
    return request(`/api/personalized?limit=6`)
}

export function GetArtistAll() {
    return request(`/api/personalized`)
}

export function GetSongsDetail(id: any) {
    return request(`/api/playlist/detail${id}`)
}

export function createUser(phone: any, password: any) {
    return request(`/api/login/cellphone?phone=${phone}&password=${password}`, {
        method: "POST",
        data: { phone, password },
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
}


export function logStatus() {
    return request(`/api/login/status`)
}

export function Layout() {
    return request(`/api/logout`)
}