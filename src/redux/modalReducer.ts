



const initialState = {
    isOpenCreatingPack: false,
    isOpenDeletingPack: false,
    isOpenEditablePack: false,
    isCreatingPack: false,
    isDeletingPack: false,
    isEditedPack: false
}

type InitailStateType = typeof initialState

export type ActionTypeModalReducer = ReturnType<typeof setCreatingPack>
    | ReturnType<typeof setDeletingPack>
    | ReturnType<typeof setEditablePack>
    | ReturnType<typeof isCreatingPack>
    | ReturnType<typeof isDeletingPack>
    | ReturnType<typeof isEditedPack>

export const modalReducer = (state: InitailStateType = initialState, action: ActionTypeModalReducer): InitailStateType => {
    switch (action.type) {
        case "SET-IS-CREATE":
            return {...state, isOpenCreatingPack: action.create}
        case "SET-IS-DELETE-PACK":
            return {...state, isOpenDeletingPack: action.del}
        case "SET-IS-EDIT-PACK":
            return {...state, isOpenEditablePack: action.edit}
        default: return state
    }
}

export const setCreatingPack = (create: boolean) => ({type: 'SET-IS-CREATE', create} as const)
export const setDeletingPack = (del: boolean) => ({type: 'SET-IS-DELETE-PACK', del} as const)
export const setEditablePack = (edit: boolean) => ({type: 'SET-IS-EDIT-PACK', edit} as const)
export const isCreatingPack = (creating: boolean) => ({type: 'CREATING-PACK', creating} as const)
export const isDeletingPack = (deleting: boolean) => ({type: 'DELETING-PACK', deleting} as const)
export const isEditedPack = (edited: boolean) => ({type: 'EDITED-PACK', edited} as const)