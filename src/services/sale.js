import http from "./config";
export default {
    dashboard: () => {
        return http.get('/dashboard')
    },
}