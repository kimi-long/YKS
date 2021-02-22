import axios from 'axios'
import router from '../router'
import {baseUrl} from "../config/env";

// create an axios instance
const service = axios.create({
    baseURL: baseUrl, // api 的 base_url
    timeout: 50000,// request timeout
})
// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        let token =  sessionStorage.getItem('token');
        //let token =  "Z889KVLRyaO8jp97PvtbEwXR6mWpf8piF4m4Q40lc-27rK7yu5ygoK3TDvfPmtmCv_DGK1GUej-VcnL1bUaRYzyeIHD5cgbG3ScvVKOuEKazrEfxlkGpVcwPLdp3vooyZieyvQZfs_OWyd0C04k3IMQeysxveUaDMCPpy8_xnufeQaD7LZOmvaYmAL8EjCNgtXWCOKfSGWj4CouTUmlqNbADqXb7R4Ecs3qkzoJ9uii27OLlJWBAq01ytgVwEIfc7-fXNkHx9C-A0OAjCXh-CtnF6iUEHN5frUdGOz2orhbYGE4T6InxXWgP_jtM2SKmhFStM_b_LOxewc8x-iKq5U12cW6sVfTpXe36yZfeeKHCgoAN66Xnx4ivazMZQC_gC-MQHtHdq_xL9Rahcmw6WTrVuUL4s7MOsoVEEIVhDhVzPGyX04P5YQK9EevfFCZdNCR-cek5Pn1S28k6Aaf77Z5XJCae5NtyaXepcYo0QDi0OtLMwOLcYTWgS3vfHHWJnqbRkPSx-A88XxSFHZSkoIC0AM8nYJxiN54D8A_7ITHB0w15SQ1F8SLHqkLQ9EVV";
        if (token) {
            // 让每个请求携带Authorization为自定义key 请根据实际情况自行修改
            config.headers['Authorization'] = 'bearer ' + token;
        }else{
            router.replace({
                path: '/'
            });
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)
// response interceptor
service.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: '/login'
                    })
                    window.location.href = '/'
                case 400:
                    router.replace({
                        path: '/login'
                    })
                    window.location.href = '/'
            }
        }
        return Promise.reject(error)
    }
)
export default service
