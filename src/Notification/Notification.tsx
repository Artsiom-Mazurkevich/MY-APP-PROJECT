import React from 'react';
import {showNotification} from "@mantine/notifications";


export const showError = (messageError: string, color: string = 'red') => {
    showNotification({message: messageError, autoClose: 5000, color})
}
