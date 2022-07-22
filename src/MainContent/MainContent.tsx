import React, {useEffect} from 'react';
import {NavigationPanel} from "../NavigationPanel/NavigationPanel";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../redux/store";

export const MainContent = () => {
    const isLoggedIn = useAppSelector(state => state.login._id)
    const navigate = useNavigate()


    useEffect(() => {
        navigate('/profile')
    }, [])


    return (
        <div>
            <NavigationPanel/>
        </div>
    );
};

