import React, {useEffect} from 'react';
import s from './App.module.css';
import {AppForm} from "./AppForm/AppForm";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {initialiseAppTC} from "./redux/appReducer";
import {MainContent} from "./MainContent/MainContent";
import {Loader} from "@mantine/core";
import {Profile} from "./Profile/Profile";

function App() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const initialized = useAppSelector(state => state.app.isInitialized)
    const isLoggedIn = useAppSelector(state => state.login._id)


    useEffect(() => {
        dispatch(initialiseAppTC())
        if (!isLoggedIn) {
            navigate('login')
        }
    }, [dispatch, isLoggedIn]);

    if (!initialized) {
        return <Loader variant={'bars'} size={'xl'} style={{position: 'absolute', top: '50%', left: '50%'}}/>
    }


    return (
        <div className={s.appBackground}>
            {isLoggedIn && <MainContent/>}
            <Routes>
                <Route path={'/forgot'} element={<AppForm type={'FORGOT'}/>}></Route>
                <Route path={'/register'} element={<AppForm type={'REGISTER'}/>}></Route>
                <Route path={'/login'} element={<AppForm type={'LOGIN'}/>}></Route>
                <Route path={'/profile'} element={<Profile/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
