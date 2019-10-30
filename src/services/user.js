import http from './config'

export default {
    signup: (user) => {
        /*const headers = {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers' : 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        }*/

        return http.post("/user/signup", user);
    },
    login: (email, senha) => {
        const credentials = btoa(email+":"+senha);
        const headers = {
            'Authorization': 'Basic '+credentials
        };
        return http.get("/user/login",{headers:headers});
    }
}
