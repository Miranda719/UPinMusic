import { request } from '@umijs/max';
// 默认搜索
export function GetDefault(){
    return request('api/search/default')
}
// 获取热门标签
export function GetHot(){
    return request('api/playlist/hot')
}
// 查询音乐列表
export function queryMusicList({ keywords='default', type = 1 }) {
    return request(`/api/search?keywords=${keywords}&type=${type}`);
}
// 获取音乐地址
export function GetMusicUrl(id=0) {
    return request(`/api/song/url?id=${id} `);
}
// 通过id获取音乐
export function GetMusicById(id=0) {
    return request(`/api/artists?id=${id}`);
}
// 获取专辑详情
export function GetAlbumDetail(id=0) {
    return request(`/api/album?id=${id}`);
}
// 获取播放列表
export function GetPlaylist(id=0,offset=1) {
    return request(`/api/playlist/track/all?id=${id}&limit=10&offset=${offset}`);
}
// 获取用户信息
export function GetUser(uid=0) {
    return request(`/api/user/detail?uid=${uid}`);
}
// 获取mv地址
export function GetMv(uid=0) {
    return request(`/api/mv/url?id=${uid}`);
}
// 获取电台节目
export function GetPrograms(id=0) {
    return request(`/api/dj/program?rid=${id}`);
}

// 根据用户id获取电台详情
export function GetProgramDetail(id=0) {
    return request(`/api/dj/program/detail?id=${id}`);
}