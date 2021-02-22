import request from './request';
//  获取多语言资源
export function getListRowClass(data) {
    return request({
        url: 'getListRowClass.aspx',
        method: 'post',
        data,
    })
};

