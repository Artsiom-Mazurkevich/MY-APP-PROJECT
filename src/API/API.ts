import axios, {AxiosResponse} from "axios";
import {RegistrationResponseType} from "../redux/registerReducer";
import {LoginType} from "../redux/loginReducer";

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
        return instance.post<{}, AxiosResponse<LoginType>>("/auth/login", {email, password,rememberMe})
    },
    authMe(){
        return instance.post('/auth/me', {})
    },
}