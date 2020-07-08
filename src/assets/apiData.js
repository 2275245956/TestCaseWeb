
import axios from "./httpApi"

const api = {
    /**
     * 登录验证
     */
    Login(param) {
        return axios.post('api/account/login', param);
    }
}

export default api
