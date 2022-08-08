



const initialState = {
    isOpenCreatingPack: false,
}

type InitailStateType = typeof initialState

export type ActionTypeModalReducer = ReturnType<typeof setOpened>

export const modalReducer = (state: InitailStateType = initialState, action: ActionTypeModalReducer): InitailStateType => {
    switch (action.type) {
        case "SET-IS-OPEN":
            return {...state, isOpenCreatingPack: action.isOpen}
        default: return state
    }
}

export const setOpened = (isOpen: boolean) => ({type: 'SET-IS-OPEN', isOpen} as const)