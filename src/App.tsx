import React, {useEffect} from 'react';
import s from './App.module.css';
import {AppForm} from "./AppForm/AppForm";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {initialiseAppTC} from "./redux/appReducer";
import {NavigationPanel} from "./NavigationPanel/NavigationPanel";

function App() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const initialized = useAppSelector(state => state.app.isInitialized)


    useEffect(() => {
        dispatch(initialiseAppTC())
    }, [dispatch]);

    // if (initialized) {
    //     return <Navigate to={'/profile'}/>
    // } else {
    //     return <Navigate to={'/login'}/>
    // }


    return (
        <div className={s.appBackground}>
            {initialized && <NavigationPanel/>}
            <Routes>
                <Route path={'/profile'} element={<Profile/>}></Route>
                <Route path={'/forgot'} element={<AppForm type={'FORGOT'}/>}></Route>
                <Route path={'/register'} element={<AppForm type={'REGISTER'}/>}></Route>
                <Route path={'/login'} element={<AppForm type={'LOGIN'}/>}></Route>
                <Route path={'/cardPacks'} element={<Profile/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
