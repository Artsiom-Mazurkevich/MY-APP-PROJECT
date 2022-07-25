type InitialStateType = {
    avatar: string
    name: string
}

const InitialState: InitialStateType = {
    avatar: '',
    name: ''
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