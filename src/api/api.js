
const { default: axios } = require("axios")

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "226f16df-9137-4f6e-9e84-3e016b8869e6",
    },
})

export const userAPI = {
    getUsers(page, pageCount) {
        return instance.get(`users?page=${page}&count=${pageCount}`)
            .then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getUser(user) {
        console.warn('Obsolete method.')
        return profileAPI.getUser(user)
    },
}

export const profileAPI = {
    getUser(user) {
        return instance.get(`profile/${user}`)
            .then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    setStatus(status){
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthUser() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}