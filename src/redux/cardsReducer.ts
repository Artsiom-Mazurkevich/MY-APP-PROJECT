import {ThunkType} from "./store";
import {cardsAPI} from "../API/API";


const initialState = {
    cards: [
        {
            _id: "",
            cardsPack_id: "",
            user_id: "",
            answer: "",
            question: "",
            grade: 0,
            shots: 0,
            comments: "",
            type: "",
            rating: 0,
            more_id: "",
            created: "",
            updated: "",
            __v: 0
        }
    ],

    cardsTotalCount: 0,
    minGrade: 0,
    maxGrade: 0,

    params: {
        page: 1,
        pageCount: 7,
        cardAnswer: '',
        cardQuestion: '',
        sortCards: '',
        min: '',
        max: '',
    }
}

type initialStateType = typeof initialState
export type ActionTypeCardsReducer = ReturnType<typeof setCards>



export const cardsReducer = (state: initialStateType = initialState, action: ActionTypeCardsReducer):initialStateType => {
    switch (action.type) {
        case "SET-USER-CARDS":
            return {...state, cards: action.newStateCards.cards, cardsTotalCount: action.newStateCards.cardsTotalCount}
        default:
            return state
    }
}

const setCards = (newStateCards: initialStateType) => ({type: 'SET-USER-CARDS', newStateCards}as const)



export const getUserCards = (userId: string, countCardsOnPage: number):ThunkType => dispatch => {
    cardsAPI.getCards(userId, countCardsOnPage)
        .then(res => {
            dispatch(setCards(res.data))
        })
}