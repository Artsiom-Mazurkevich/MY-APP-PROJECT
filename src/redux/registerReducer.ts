import {ThunkType} from "./store";
import {authAPI} from "../API/API";
import {showStatusMessage} from "../Loader&Notifications/Notification";

export type RegistrationResponseType = {
    addedUser: {
        _id: string
        email: string
        rememberMe: boolean
        isAdmin: boolean
        name: string
        verified: boolean
        publicCardPacksCount: number
        created: string
        updated: string
        __v: number
    }
}

type InitialStateType = {
    email: string
    isRegistered: boolean
}


const initialState: InitialStateType = {
    email: '',
    isRegistered: false,
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionTypeRegisterReducer) => {
    switch (action.type) {
        case "REGISTER": {
            return {
                ...state,
                email: action.payload.email,
                isRegistered: action.payload.isRegistered
            }
        }
        default: {
            return state
        }
    }
}


export type ActionTypeRegisterReducer = ReturnType<typeof registerAC>
const registerAC = (email: string, isRegistered: boolean) => ({
    type: 'REGISTER',
    payload: {email, isRegistered: isRegistered}
} as const)


export const registerTC = (email: string, password: string):ThunkType => dispatch => {
    authAPI.register(email, password)
        .then(response => {
            dispatch(registerAC(response.data.addedUser.email, true))
            showStatusMessage('User added successfully!', 'green')
        })
        .catch(response => {
            console.log(response.response.data.error)
            showStatusMessage(response.response.data.error)
        })
}