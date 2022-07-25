import axios, {AxiosResponse} from "axios";
import {RegistrationResponseType} from "../redux/registerReducer";

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || "http://localhost:7542/2.0/",
    baseURL: "http://localhost:7542/2.0",
    withCredentials: true,
})


export const authAPI = {
    register(email: string, password: string) {
        return instance.post<{}, AxiosResponse<RegistrationResponseType>>("/auth/register", {
            email,
            password
        })
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<{}, AxiosResponse<any>>("/auth/login", {email, password, rememberMe})
    },
    authMe() {
        return instance.post('/auth/me', {})
    },
//     recovery(email: string) {
//         return instance.post('/auth/forgot', {
//             email, message: `<div style="background-color: lime; padding: 15px">password recovery link:
// <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
//         })
//     }
}