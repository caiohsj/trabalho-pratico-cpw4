import http from './config.js'

export default {
    list: (category, page) => {
        return http.get('/product/list/'+category+"/"+page)
    }
}