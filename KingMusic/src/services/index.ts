import { request } from '@umijs/max';

export function Getlist(){
    return request('/api/song/detail?ids=347230,347231')
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