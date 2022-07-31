import React, {useEffect} from 'react';
import s from './App.module.css';
import {AppForm} from "./AppForm/AppForm";
import {Navigate, Route, Routes} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {initialiseAppTC} from "./redux/appReducer";
import {Loader} from "@mantine/core";
import {Profile} from "./Profile/Profile";
import {MainContent} from "./MainContent/MainContent";
import {IsAuthHoc} from "./HOC/IsAuthHoc";
import {LoginPage} from "./AppForm/LoginPage";
import {RegistrationPage} from "./AppForm/RegistrationPage";
import {ForgotPasswordPage} from "./AppForm/ForgotPasswordPage";

function App() {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector(state => state.app.isInitialized)
    const isLoggedIn = useAppSelector(state => state.login._id)


    useEffect(() => {
        dispatch(initialiseAppTC())
    }, [dispatch]);

    if (!initialized) {
        return <Loader variant={'bars'} size={'xl'} style={{position: 'absolute', top: '50%', left: '50%'}}/>
    }


    return (
        isLoggedIn
            ? <MainContent/>
            : <div className={s.appBackground}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}></Route>
                <Route path={'/forgot'} element={<ForgotPasswordPage/>}></Route>
                <Route path={'/register'} element={<RegistrationPage/>}></Route>
                <Route path={'/login'} element={<LoginPage/>}></Route>
                <Route path={'/profile'} element={<IsAuthHoc><MainContent/></IsAuthHoc>}></Route>
                {/*<Route path={'*'} element={<Navigate to={<div></div>}/>}></Route>*/}
            </Routes>
        </div>
    );
}

export default App;
