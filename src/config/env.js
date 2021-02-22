/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = {};
let routerMode = 'history';
let baseImgPath;
let logout = "/"
if (process.env.NODE_ENV == 'development') {
   // baseUrl= 'http://test.xingxingzhihuo.com.cn/newweixin/'
    baseUrl= 'http://yuekeapi.xingxingzhihuo.com.cn/newweixin/'
} else {
    // baseUrl= 'http://test.xingxingzhihuo.com.cn/newweixin/'
   baseUrl= 'http://yuekeapi.xingxingzhihuo.com.cn/newweixin/'

}

export {
    baseUrl,
    routerMode,
    baseImgPath,
    logout,
}
