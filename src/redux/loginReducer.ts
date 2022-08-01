import {ThunkType} from "./store";
import {authAPI} from "../API/API";
import {setLoadingStatus} from "./appReducer";
import {showStatusMessage} from "../Loader&Notifications/Notification";
import {changeName} from "./profileReducer";


export type LoginType = {
    _id: string
    email?: string
}

const initialState: LoginType = {
    _id: '',
    email: '',

}

export type ActionTypeLoginReducer = ReturnType<typeof loginAC>

export const loginReducer = (state: LoginType = initialState, action: ActionTypeLoginReducer):LoginType  => {
    switch (action.type) {
        case "login/SET-USER": {
            return {
                ...state,
                _id: action.payload.newState._id,
                email: action.payload.newState.email,
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
            dispatch(changeName(res.data.name))
            dispatch(setLoadingStatus('successful'))
        })
        .catch(e => {
            dispatch(setLoadingStatus('failed'))
            showStatusMessage(e.response.data.error)
        })
}

export const logOut = ():ThunkType => dispatch => {
    authAPI.logOut()
        .then(res => {
            dispatch(loginAC({_id: ''}))
        })
        .catch(e => {
            showStatusMessage(e.response.data.error)
        })
}