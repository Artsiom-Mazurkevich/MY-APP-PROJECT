import {ThunkType} from "./store";
import {authAPI} from "../API/API";

export type LoadingStatusType = "idle" | "loading" | "successful" | "failed"

type InitialStateType = {
    error: string | null
    loadingStatus: LoadingStatusType
    isInitialized: boolean
}
const initialState: InitialStateType = {
    error: null,
    loadingStatus: "idle",
    isInitialized: false,
}


export const appReducer = (state: InitialStateType = initialState, action: ActionTypeAppReducer): InitialStateType => {
    switch (action.type) {
        case "app/SET-LOADING-STATUS":
            return {...state, loadingStatus: action.loadingStatus}
        case "app/SET-INITIALIZED": {
            return {...state, isInitialized: action.isInitialized}
        }
        case "app/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setLoadingStatus = (loadingStatus: LoadingStatusType) => {
    return {
        type: "app/SET-LOADING-STATUS",
        loadingStatus
    } as const
}
export const setInitialized = (isInitialized: boolean) => {
    return {
        type: "app/SET-INITIALIZED",
        isInitialized
    } as const
}

export const setError = (error: string | null) => {
    return {
        type: "app/SET-ERROR",
        error
    } as const
}

export type ActionTypeAppReducer = ReturnType<typeof setLoadingStatus>
    | ReturnType<typeof setInitialized>
    | ReturnType<typeof setError>






export const initialiseAppTC = ():ThunkType => dispatch => {
    dispatch(setLoadingStatus('loading'))
    authAPI.authMe().then(res => {
        console.log(res)
        })
        .catch(e => {
            console.log(e.response.data.error)
            dispatch(setError(e.error))
        })
}