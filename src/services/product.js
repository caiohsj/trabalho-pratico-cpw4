import http from './config.js'

export default {
    list: () => {
        return http.get('/product/list')
    }
}