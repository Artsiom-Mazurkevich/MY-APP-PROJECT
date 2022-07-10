import React, {useEffect} from 'react';
import s from './App.module.css';
import {AppForm} from "./AppForm/AppForm";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {initialiseAppTC} from "./redux/appReducer";

function App() {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector(state => state.app.isInitialized)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(initialiseAppTC())
        if (!initialized) {
            navigate('/login')
        }
    }, [dispatch])


    return (
        <div className={s.appBackground}>
            <Routes>
                <Route path={'/'} element={<Profile/>}></Route>
                <Route path={'/forgot'} element={<AppForm type={'FORGOT'}/>}></Route>
                <Route path={'/register'} element={<AppForm type={'REGISTER'}/>}></Route>
                <Route path={'/login'} element={<AppForm type={'LOGIN'}/>}></Route>
                <Route path={'/cardPacks'} element={<Profile/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
