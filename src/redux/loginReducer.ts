import {ThunkType} from "./store";
import {authAPI} from "../API/API";
import {setInitialized, setLoadingStatus} from "./appReducer";


export type LoginType = {
    _id: string
    email: string
    rememberMe: boolean
    error: string
}

const initialState: LoginType = {
    _id: '',
    email: '',
    rememberMe: false,
    error: '',
}

export type ActionTypeLoginReducer = ReturnType<typeof loginAC> | ReturnType<typeof setErrorLoginResponse>

export const loginReducer = (state: LoginType = initialState, action: ActionTypeLoginReducer) => {
    switch (action.type) {
        case "login/SET-USER": {
            return {
                ...state,
                _id: action.payload.newState._id,
                email: action.payload.newState.email,
                rememberMe: action.payload.newState.rememberMe,
            }
        }
        case "ERROR":
            return {...state, error: action.payload.error}
        default: {
            return state
        }
    }
}

export const loginAC = (newState: LoginType) => {
    return {
        type: "login/SET-USER",
        payload: {
            newState
        }
    } as const
}

export const setErrorLoginResponse = (error: string) => ({type: 'ERROR', payload: {error}} as const)

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
            dispatch(setErrorLoginResponse(e.error))
            console.log(e.response.data.error)
        })
        .finally(() => {
            dispatch(setLoadingStatus('idle'))
        })
}