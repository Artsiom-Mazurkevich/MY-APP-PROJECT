import {ThunkType} from "./store";
import {cardsAPI} from "../API/API";
import {showStatusMessage} from "../Loader&Notifications/Notification";
import {setOpened} from "./modalReducer";


const initialState = {
    cardPacks: [
        {
            _id: "",
            user_id: "",
            user_name: "",
            private: false,
            name: "",
            path: "",
            grade: 0,
            shots: 0,
            cardsCount: 0,
            type: "",
            rating: 0,
            created: "",
            updated: "",
            more_id: "",
            __v: 0,
        }
    ],
    cardPacksTotalCount: 10,
    packName: '',
    min: 0,
    max: 110,
    sortPacks: '0updated',
    page: 1,
    pageCount: 7,
    user_id: '',
    isFetching: false,
    creatingPack: false,
}
type initialStateType = typeof initialState
export type ActionTypePackReducer = ReturnType<typeof setCards>
    | ReturnType<typeof changePageCount>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof selectMyCards>
    | ReturnType<typeof searchPackName>
    | ReturnType<typeof change_Min_Max_Cards>
    | ReturnType<typeof setIsFetchingCards>
    | ReturnType<typeof setIsCreatingPack>


export const cardsPackReducer = (state: initialStateType = initialState, action: ActionTypePackReducer): initialStateType => {
    switch (action.type) {
        case "SET-CARDS":
            return {
                ...state,
                cardPacks: action.newCards.cardPacks,
                cardPacksTotalCount: action.newCards.cardPacksTotalCount
            }
        case "CHANGE-PAGE-COUNT":
            return {...state, pageCount: action.pageCount}
        case "CHANGE-CURRENT-PAGE":
            return {...state, page: action.page}
        case "SELECT-MY-CARDS":
            return {...state, user_id: action.id}
        case "SEARCH-PACK":
            return {...state, packName: action.value}
        case "CHANGE-MIN-MAX-CARDS":
            return {...state, min: action.min_max[0], max: action.min_max[1]}
        case "IS-FETCHING-CARDS":
            return {...state, isFetching: action.isFetching}
        case "IS-CREATING-PACK":
            return {...state, creatingPack: action.isCreating}
        default:
            return state
    }
}

const setCards = (newCards: initialStateType) => ({type: 'SET-CARDS', newCards} as const)
export const changePageCount = (pageCount: number) => ({type: 'CHANGE-PAGE-COUNT', pageCount} as const)
export const changeCurrentPage = (page: number) => ({type: 'CHANGE-CURRENT-PAGE', page} as const)
export const selectMyCards = (id: string) => ({type: 'SELECT-MY-CARDS', id} as const)
export const searchPackName = (value: string) => ({type: 'SEARCH-PACK', value} as const)
export const change_Min_Max_Cards = (min_max: number[]) => ({type: 'CHANGE-MIN-MAX-CARDS', min_max} as const)
export const setIsFetchingCards = (isFetching: boolean) => ({type: 'IS-FETCHING-CARDS', isFetching} as const)
const setIsCreatingPack = (isCreating: boolean) => ({type: 'IS-CREATING-PACK', isCreating} as const)


export const getCards = (packName: string, min: number, max: number, sortPacks: string, page: number, pageCount: number, user_id: string): ThunkType => dispatch => {
    dispatch(setIsFetchingCards(true))
    cardsAPI.getPacks(packName, min, max, sortPacks, page, pageCount, user_id)
        .then(res => {
            dispatch(setCards(res.data))
            dispatch(setIsFetchingCards(false))
        })
        .catch(e => {
            showStatusMessage(e.response.data.error)
        })
        .finally(() => dispatch(setIsFetchingCards(false)))
}

export const createPackThunk = (name: string, isPrivate: boolean): ThunkType => dispatch => {
    dispatch(setIsCreatingPack(true))
    cardsAPI.createPack(name, isPrivate)
        .then(res => {
            dispatch(setOpened(false))
            dispatch(setIsCreatingPack(false))
            showStatusMessage('Pack added successful', 'green')
            console.log(res)
        })
        .catch(e => {
            showStatusMessage(e.response.data.error)
        })
}