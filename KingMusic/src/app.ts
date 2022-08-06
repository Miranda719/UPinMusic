import { RequestConfig } from '@umijs/max';
import { matchRoutes } from '@umijs/max';
import { notification } from 'antd';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
// export async function getInitialState(): Promise<{ audio: any }> {
//   const audio = React.createRef<HTMLAudioElement>();
//   return  {audio} ;
// }

// export const layout = () => {
//   return {
//     logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
//     menu: {
//       locale: false,
//     },
//   };
// };
export function onRouteChange({ clientRoutes, location }: { clientRoutes: any, location: any }) {
    const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
    if (route) {
        document.title = (route as any).title || "";
    }
  }

export const request: RequestConfig = {
  timeout: 2000,
  errorConfig: {
    errorHandler(error: any) {
      notification.error({
        description: '您的网络发生异常，无法连接服务器',
        message: '网络异常',
      });
      throw error;
    },
    errorThrower(res) {
      console.log(res);
    }
  },
  //请求拦截
  requestInterceptors: [
    [
      (config) => {
        const url = config.url;
        return { ...config, url };
      }
    ]
  ],
  //响应拦截
  responseInterceptors: [
    (response) => {
      return response;
    }
  ]
}