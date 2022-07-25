import {ThunkType} from "./store";
import {authAPI} from "../API/API";
import {setInitialized, setLoadingStatus} from "./appReducer";
import {showError} from "../Notification/Notification";
import {changeName} from "./profileReducer";


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

export type ActionTypeLoginReducer = ReturnType<typeof loginAC>

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


export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType => dispatch => {
    dispatch(setLoadingStatus('loading'))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(loginAC(res.data))
            dispatch(setInitialized(true))
            dispatch(changeName(res.data.name))
            dispatch(setLoadingStatus('successful'))
        })
        .catch(e => {
            dispatch(setLoadingStatus('failed'))
            showError(e.response.data.error)
        })
        .finally(() => {
            dispatch(setLoadingStatus('idle'))
        })
}


// export const recoveryPassword = (email: string): ThunkType => dispatch => {
//
// }