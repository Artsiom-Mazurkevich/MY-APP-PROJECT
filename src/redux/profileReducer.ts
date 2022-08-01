import {ThunkType} from "./store";
import {profileAPI} from "../API/API";
import {showStatusMessage} from "../Loader&Notifications/Notification";

type InitialStateType = {
    avatar: string
    name: string
}

const InitialState: InitialStateType = {
    avatar: 'https://static.vecteezy.com/system/resources/previews/002/013/887/original/samurai-head-with-oni-mask-free-vector.jpg',
    name: 'Your Name'
}

export type ActionTypeProfileReducer = ReturnType<typeof changeName> | ReturnType<typeof changeAvatar>
export const profileReducer = (state: InitialStateType = InitialState, action: ActionTypeProfileReducer) :InitialStateType => {
    switch (action.type) {
        case "SET-NAME":
            return {...state, name: action.name}
        case "SET-NEW-AVATAR":
            return {...state, avatar: action.avatar}
        default:
            return state
    }
}


export const changeName = (name: string) => ({type: 'SET-NAME', name} as const)
export const changeAvatar = (avatar: string) => ({type: 'SET-NEW-AVATAR', avatar} as const)

export const setNewNameUser = (newName: string):ThunkType => dispatch => {
    profileAPI.setNewName(newName)
        .then(res => {
            dispatch(changeName(res.data.updatedUser.name))
        })
        .catch(e => {
            showStatusMessage(e.response.data.error)
        })
}

export const setNewAvatar = (newAvatar: string):ThunkType => dispatch => {
    profileAPI.setNewAvatar(newAvatar)
        .then(res => {
            dispatch(changeAvatar(res.data.updatedUser.avatar))
        })
        .catch(e => {
            showStatusMessage(e.response.data.error)
        })
}
