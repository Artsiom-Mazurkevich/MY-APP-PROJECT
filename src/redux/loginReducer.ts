import {ThunkType} from "./store";
import {authAPI} from "../API/API";
import {setError, setInitialized, setLoadingStatus} from "./appReducer";

type LoginStateType = {
    data: LoginResponseType
    isAuth: boolean
}

export type LoginResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

const initialState: LoginStateType = {
    data: {
        _id: "",
        email: "",
        name: "",
        avatar: "",
        publicCardPacksCount: 0,
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false,
        rememberMe: false,
        error: ""
    },
    isAuth: false
}

export type ActionTypeLoginReducer = ReturnType<typeof loginAC>

export const loginReducer = (state: LoginStateType = initialState, action: ActionTypeLoginReducer) => {
    switch (action.type) {
        case "login/SET-USER": {
            return {
                ...state,
                data: action.payload.data,
                isAuth: action.payload.isAuth
            }
        }
        default: {
            return state
        }
    }
}

export const loginAC = (data: LoginResponseType, isAuth: boolean) => {
    return {
        type: "login/SET-USER",
        payload: {
            data,
            isAuth
        }
    } as const
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => dispatch => {
    dispatch(setLoadingStatus('loading'))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(loginAC(res.data, true))
            dispatch(setInitialized(true))
            dispatch(setLoadingStatus('successful'))
        })
        .catch(e => {
            dispatch(setLoadingStatus('failed'))
            console.log(e.response.data.error)
        })
}