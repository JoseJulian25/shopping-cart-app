import apiClient from "../config/axios";

const authService = {

    async register(user) {
        const {data} = await apiClient.post('/auth/register', user);
        localStorage.setItem('token', data.token);

        return data;
    },

    async login (email, password) {
        const {data} = await apiClient.post('/auth/login', {email, password});
        localStorage.setItem('token', data.token);

        return data;
    },

    async checkToken() {
        const { data } = await apiClient.get('/auth/check-token');
        return data;
    },
};

export default authService;