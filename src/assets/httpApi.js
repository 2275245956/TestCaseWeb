/**
 * 封装axios
 */
import axios from "axios"
// import qs from "querystring"
import router from "../router/index"
// import store from '../../store'
import storage from './localstorage'

/**
 * 返回登陆页面
 */
const tologin = () => {
    router.push({
        path: '/'
    })
}

/**
 * 错误验证
 * @param {错误状态} status 
 * @param {错误信息} other 
 */
const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log("信息校验失败");
            storage.setItem("errorMsg","信息校验失败");
            break;
        case 401:
            tologin();
            console.log("认证失败");
            storage.setItem("errorMsg","认证失败");
            break;
        case 403:
            tologin();
            storage.setItem('token', '')
            console.log("token校验失败");
            storage.setItem("errorMsg","token校验失败");
            break;
        case 404:
            console.log("请求的资源不存在");
            storage.setItem("errorMsg","请求的资源不存在");
            
            break;
        default:
            console.log(other);
            break;
    }
}

var bsaeUrl = process.env.NODE_ENV === 'production' ? "" : "https://localhost:44325/";

/**
 * 创建axios实例
 */
var instance = axios.create({ timeout: 10000 })
instance.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';

/**
 * 拦截请求
 */
instance.interceptors.request.use(function (config) {
    config.token=storage.getItem('token');
    config.url = bsaeUrl +config.url;
    console.log(config);
    return config;
}, function (error) {
    return Promise.reject(error);
})

/**
 * 拦截响应
 */
instance.interceptors.response.use(
    /**
     * 请求成功
     */
    res => {
      var rpData=JSON.parse(res.request.responseText);
     // console.log(rpData);
      return  rpData; 
    }, 
    /**
     * 请求失败
     */
    error => {
        const { response } = error;
        if (response) {
            errorHandle(response.status, response.data.Message);
            return Promise.reject(response);
        } else {
            console.log("未连接");
            storage.setItem("errorMsg","未连接");
        }
    }
)

export default instance
