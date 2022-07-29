import { request } from '@umijs/max';

export function Getlist(){
    return request('/api/song/detail?ids=347230,347231')
}
// 