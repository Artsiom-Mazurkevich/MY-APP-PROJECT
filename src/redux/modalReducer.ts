



const initialState = {
    isOpenCreatingPack: false,
    isOpenDeletingPack: false
}

type InitailStateType = typeof initialState

export type ActionTypeModalReducer = ReturnType<typeof setOpened> | ReturnType<typeof setDeletingPack>

export const modalReducer = (state: InitailStateType = initialState, action: ActionTypeModalReducer): InitailStateType => {
    switch (action.type) {
        case "SET-IS-OPEN":
            return {...state, isOpenCreatingPack: action.isOpen}
        case "SET-IS-DELETING-PACK":
            return {...state, isOpenDeletingPack: action.deleting}
        default: return state
    }
}

export const setOpened = (isOpen: boolean) => ({type: 'SET-IS-OPEN', isOpen} as const)
export const setDeletingPack = (deleting: boolean) => ({type: 'SET-IS-DELETING-PACK', deleting} as const)