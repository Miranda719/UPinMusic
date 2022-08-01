import { request } from '@umijs/max';

export function GetDefaultSearch(){
    return request('api/search/default')
}
// 