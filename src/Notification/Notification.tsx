import React from 'react';
import {showNotification} from "@mantine/notifications";
import {LoadingStatusType} from "../redux/appReducer";


interface INotification {
    loadingStatus: LoadingStatusType
}

export const NotificationApp = ({loadingStatus}:INotification) => {

    return (
        <>
            {showNotification({message: '', autoClose: 5000, color: loadingStatus === 'failed' ? 'red' : 'green'})}
        </>
    );
};
