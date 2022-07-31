import React from 'react';
import {NavigationPanel} from "../NavigationPanel/NavigationPanel";
import {Profile} from "../Profile/Profile";

export const MainContent = () => {

    return (
        <div>
            <NavigationPanel/>
            <Profile/>
        </div>
    );
};

