import React, {ReactNode, useEffect} from 'react';
import {useAppSelector} from "../redux/store";
import {useNavigate} from "react-router-dom";

export const RequireAuth: React.FC<{children:ReactNode}> = ({children}) => {
    const navigate = useNavigate()
    // const location = useLocation()
    const isLoggedIn = useAppSelector(state => state.login._id)
    // if (!isLoggedIn) {return <Navigate to={'login'} state={{from: location}}/>}

    useEffect(() => {
        if (!isLoggedIn) navigate('login')
    }, [isLoggedIn])

    return (
        <>{children}</>
    );
};

