import axios from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {BASE_URL} from '../config/couster'

const instance = axios.create({
    baseURL: "/api",
    headers:{'Access-Control-Allow-Headers': ['X-Requested-With','Content-Typ','Content-Length','Authorization','Accept']},
    timeout: 10000,
});



// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    NProgress.start();
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    NProgress.done();

    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    NProgress.done();
    // 对响应数据做点什么
    return response;
}, function (error) {
    NProgress.done();
    // 对响应错误做点什么
    return Promise.reject(error);
});
export let $get = async (url,params) =>{
    let {data} = await instance.get(url,{params:params})
    return data
}
export let $post = async (url,params) =>{
    let {data} = await instance.post(url,params)
    return data
}
