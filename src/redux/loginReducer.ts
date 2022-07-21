import {ThunkType} from "./store";
import {authAPI} from "../API/API";
import {setInitialized, setLoadingStatus} from "./appReducer";


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

const initialState: LoginResponseType = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: '',
}

export type ActionTypeLoginReducer = ReturnType<typeof loginAC>

export const loginReducer = (state: LoginResponseType = initialState, action: ActionTypeLoginReducer) => {
    switch (action.type) {
        case "login/SET-USER": {
            return {
                ...state,
                _id: action.payload.newState._id,
                email: action.payload.newState.email,
                name: action.payload.newState.name,
                avatar: action.payload.newState.avatar,
                publicCardPacksCount: action.payload.newState.publicCardPacksCount,
                created: action.payload.newState.created,
                updated: action.payload.newState.updated,
                isAdmin: action.payload.newState.isAdmin,
                verified: action.payload.newState.verified,
                rememberMe: action.payload.newState.rememberMe,
                error: action.payload.newState.error,
            }
        }
        default: {
            return state
        }
    }
}

export const loginAC = (newState: LoginResponseType) => {
    return {
        type: "login/SET-USER",
        payload: {
            newState
        }
    } as const
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => dispatch => {
    dispatch(setLoadingStatus('loading'))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(loginAC(res.data))
            dispatch(setInitialized(true))
            dispatch(setLoadingStatus('successful'))
        })
        .catch(e => {
            dispatch(setLoadingStatus('failed'))
            console.log(e.response.data.error)
        })
}