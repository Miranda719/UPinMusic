import { request } from '@umijs/max';

export function Getlist(){
    return request('/api/song/detail?ids=347230,347231')
}
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