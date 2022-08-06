import { request } from '@umijs/max';
//歌曲详细信息
export function GetMusicDetail(id:number){
    return request(`/api/song/detail?ids=${id}`)
}

//歌曲url地址
export function GetMusicUrl(id:number){
    return request(`/api/song/url?id=${id}`);
}

export function Getlist() {
    return request('/api/song/detail?ids=347230,347231')
}

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
export function detailList(){
    return request('/api/user/detail?uid=1342910203')
}
export function likelList(){
    return request('/api/likelist?uid=1342910203')
}
export function LilistD(id:any){
    return request(`/api/song/detail?ids=${id}&limit=5`)
}
export function RecentList(){
    return request('/api/record/recent/song?limit=10')
}
export function UsermusicL(){
    return request('/api/user/playlist?uid=1342910203')
}
export function UserML(){
    return request('/api/user/subcount')
}
export function gedanD(id:any,limit:any,offset:any){
    return request(`/api/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`)
}
export function CreateD(name:any){
    return request('/api/playlist/create?name=${name}')
}
export function DeleteD(id:any){
    return request(`/api/playlist/delete?id=${id}`)
}
// 
// 
export function Getlist1(){
    return request('/api/toplist/detail')
}

export function GetAllList(Iid:any,Limit:any,Offset:any){    
    return request(`/api/playlist/track/all?id=${Iid}&limit=${Limit}&offset=${Offset}`)
}
export function GetPinglun(Iid:any){    
    return request(`/api/comment/music?id=${Iid}&limit=5000`)
}
