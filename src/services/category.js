import http from './config'

export default {
    list: () => {
        return http.get('/category/list')
    },
    create: (category) => {
        const user = sessionStorage.getItem('authUser')
        alert(category.description)
        const headers = {
            'Authorization': 'Bearer '+user.token
        };
        return http.post('/category', category, {headers:headers})
    }
}