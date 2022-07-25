import {ThunkType} from "./store";
import {authAPI, profileAPI} from "../API/API";
import {showError} from "../Notification/Notification";
import {loginAC} from "./loginReducer";

type InitialStateType = {
    avatar: string
    name: string
}

const InitialState: InitialStateType = {
    avatar: '',
    name: 'Your Name'
}

export type ActionTypeProfileReducer = ReturnType<typeof changeName>
export const profileReducer = (state: InitialStateType = InitialState, action: ActionTypeProfileReducer) => {
    switch (action.type) {
        case "SET-NAME":
            return {...state, name: action.name}
        default:
            return state
    }
}


export const changeName = (name: string) => ({type: 'SET-NAME', name} as const)

export const setNewNameUser = (newName: string):ThunkType => dispatch => {
    profileAPI.setNewName(newName)
        .then(res => {
            dispatch(changeName(res.data.updatedUser.name))
        })
        .catch(e => {
            showError(e.response.data.error)
        })
}


export const logOut = ():ThunkType => dispatch => {
    authAPI.logOut()
        .then(res => {
            dispatch(loginAC({_id: ''}))
            showError(res.data.info, 'green')
        })
}