import http from './config'
import store from "../store";

export default {
    list: () => {
        return http.get('/category/list')
    },
    create: (category) => {
        const user = store.getters.authUser
        console.log(category);
        console.log(user);
        const headers = {
            Authorization: 'Bearer '+user.token
        };
        console.log(headers);
        return http.post('/category', category, {headers:headers})
    }
}