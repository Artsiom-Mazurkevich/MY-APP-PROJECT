import React, {useEffect} from 'react';
import {Modal, TextInput} from "@mantine/core";


export const show = () => {
    return true
}

export const ModalWindow = () => {

    const [opened, setOpened] = React.useState(false);
    return (
        <Modal centered
               opened={opened}
               transition="fade"
               onClose={() => setOpened(false)}>
            <TextInput placeholder={'paste URL'} autoFocus/>
        </Modal>
    );
};


