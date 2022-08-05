// 首页轮播图组件类型
type HomeCarouselItem = {
    banners: [{
        pic?: string
    }]
}

type HomeCarouselIProps = Readonly<{
    banner: HomeCarouselItem
}>

type HomePersonItem = {
    adata: {}
    result: []
}

type HomePersonIProps = Readonly<{
    adata: HomePersonItem
}>

type HomePersonAllItem = {
    result: []
    aadata: {}
}

type HomePersonAllIProps = Readonly<{
    aadata: HomePersonItem
}>



type HomeHotItem = {
    tags: any
    tdata: []
}

type HomeHotIProps = Readonly<{
    tdata: HomeHotItem
    changeTabs: Function
}>

type SongsDetailItem = {
    playlist: {
        coverImgUrl: string,
        name: string,
        description: string,
        tags: any,
        playCount: any
        tracks: [],
        creator: {
            avatarUrl: string,
            nickname: string,
            backgroundUrl: string,
            avatarDetail: {
                identityIconUrl: string
            }
        }
    }
    sdata: {}
}

type SongsDetailIProps = Readonly<{
    sdata: SongsDetailItem
}>

type MobileValue = Readonly<{
    user:{
        phone:any,
        password:any
    }
}>