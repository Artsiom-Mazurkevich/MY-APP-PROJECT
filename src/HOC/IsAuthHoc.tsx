import React, {ReactNode} from 'react';
import {useAppSelector} from "../redux/store";
import {Navigate} from "react-router-dom";

export const IsAuthHoc: React.FC<{children:ReactNode}> = ({children}) => {
    const isLoggedIn = useAppSelector(state => state.login._id)
    if (!isLoggedIn) {return <Navigate to={'login'}/>}
    return (
        <div>
            {children}
        </div>
    );
};

