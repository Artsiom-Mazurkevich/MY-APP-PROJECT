import {ThunkType} from "./store";
import {cardsAPI} from "../API/API";
import {showStatusMessage} from "../Loader&Notifications/Notification";


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
    packName:'',
    min:0,
    max: 110,
    sortPacks: '0updated',
    page: 1,
    pageCount: 7,
    user_id: '',
}
type initialStateType = typeof initialState
export type ActionTypePackReducer = ReturnType<typeof setCards>
    | ReturnType<typeof changePageCount>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof selectMyCards>


export const cardsPackReducer = (state: initialStateType = initialState, action: ActionTypePackReducer):initialStateType => {
    switch (action.type) {
        case "SET-CARDS":
            return {...state, cardPacks: action.newCards.cardPacks, cardPacksTotalCount: action.newCards.cardPacksTotalCount}
        case "CHANGE-PAGE-COUNT":
            return {...state, pageCount: action.pageCount}
        case "CHANGE-CURRENT-PAGE":
            return {...state, page: action.page}
        debugger
        case "SELECT-MY-CARDS":
            return {...state, user_id: action.id}
        default: return state
    }
}

const setCards = (newCards: initialStateType) => ({type: 'SET-CARDS', newCards} as const)
export const changePageCount = (pageCount: number) => ({type: 'CHANGE-PAGE-COUNT', pageCount} as const)
export const changeCurrentPage = (page: number) => ({type: 'CHANGE-CURRENT-PAGE', page} as const)
export const selectMyCards = (id: string) => ({type: 'SELECT-MY-CARDS', id} as const)


export const getCards = (packName: string, min: number, max: number, sortPacks: string, page: number, pageCount: number, user_id: string):ThunkType => dispatch => {
    cardsAPI.getCards(packName, min ,max, sortPacks, page, pageCount, user_id)
        .then(res => {
            dispatch(setCards(res.data))
        })
        .catch(e => {
            showStatusMessage(e.response.data.error)
        })
}