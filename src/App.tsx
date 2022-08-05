import React, {useEffect} from 'react';
import s from './App.module.css';
import {Route, Routes} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {initialiseAppTC} from "./redux/appReducer";
import {Loader} from "@mantine/core";
import {Profile} from "./Profile/Profile";
import {RequireAuth} from "./HOC/RequireAuth";
import {LoginPage} from "./AppForm/LoginPage";
import {RegistrationPage} from "./AppForm/RegistrationPage";
import {ForgotPasswordPage} from "./AppForm/ForgotPasswordPage";
import {MainContent} from "./MainContent/mainContent";
import {CardPacks} from "./CardPacks/CardPacks";
import {Cards} from "./Cards/Cards";

function App() {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector(state => state.app.isInitialized)


    useEffect(() => {
        dispatch(initialiseAppTC())
    }, [dispatch]);

    if (!initialized) {
        return <Loader variant={'bars'} size={'xl'} style={{position: 'absolute', top: '50%', left: '50%'}}/>
    }


    return (
        <div className={s.appBackground}>
            <Routes>
                <Route path={'/'} element={<RequireAuth><MainContent/></RequireAuth>}>
                    <Route index element={<Profile/>}></Route>
                    <Route path={'cardPacks'} element={<CardPacks/>}></Route>
                    <Route path={'*'} element={<div>Page not found</div>}></Route>
                    <Route path={'login'} element={<LoginPage/>}></Route>
                    <Route path={'registration'} element={<RegistrationPage/>}></Route>
                    <Route path={'password-recovery'} element={<ForgotPasswordPage/>}></Route>
                    <Route path={'cardPacks/:id'} element={<Cards/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
