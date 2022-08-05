import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleWare, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionTypeAppReducer, appReducer} from "./appReducer";
import {ActionTypeRegisterReducer, registerReducer} from "./registerReducer";
import {ActionTypeLoginReducer, loginReducer} from "./loginReducer";
import {profileReducer} from "./profileReducer";
import {ActionTypePackReducer, cardsPackReducer} from "./cardsPackReducer";
import {ActionTypeCardsReducer, cardsReducer} from "./cardsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    register: registerReducer,
    login: loginReducer,
    profile: profileReducer,
    cardsPack: cardsPackReducer,
    cardsUser: cardsReducer,
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export type AppRootStateType = ReturnType<typeof store.getState>


export const useAppDispatch: () => ThunkDispatch<AppRootStateType, void, AnyAction> = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

export type AppRootActionsType = ActionTypeRegisterReducer
    | ActionTypeLoginReducer
    | ActionTypeAppReducer
    | ActionTypePackReducer
    | ActionTypeCardsReducer;

// @ts-ignore
window.store = store;