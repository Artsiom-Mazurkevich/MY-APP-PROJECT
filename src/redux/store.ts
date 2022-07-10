import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleWare, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionTypeAppReducer, appReducer} from "./appReducer";
import {ActionTypeRegisterReducer, registerReducer} from "./registerReducer";
import {ActionTypeLoginReducer, loginReducer} from "./loginReducer";

const rootReducer = combineReducers({
    app: appReducer,
    register: registerReducer,
    login: loginReducer,
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export type AppRootStateType = ReturnType<typeof store.getState>


export const useAppDispatch: () => ThunkDispatch<AppRootStateType, void, AnyAction> = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

export type AppRootActionsType = ActionTypeRegisterReducer
    | ActionTypeLoginReducer
    | ActionTypeAppReducer;

// @ts-ignore
window.store = store;