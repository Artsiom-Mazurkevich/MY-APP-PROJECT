import React, {ReactNode, useEffect} from 'react';
import {
    Button,
    ButtonVariant,
    Divider,
    LoadingOverlay,
    MantineNumberSize,
    Modal,
    TextInput,
    useMantineTheme
} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setCreatingPack} from "../redux/modalReducer";


interface ModalWindowProps {
    content: ReactNode
    titleWindow: string
    controlBtn: ReactNode
    onCloseWindow: () => void
    openedWindow: boolean
    visibleLoadingOverlay: boolean
}


export const ModalWindow = (
    {
        content,
        titleWindow,
        controlBtn,
        onCloseWindow,
        openedWindow,
        visibleLoadingOverlay
    }: ModalWindowProps) => {

    const theme = useMantineTheme();


    return (
        <>
            <Modal centered
                   size={'lg'}
                   opened={openedWindow}
                   title={titleWindow}
                   styles={{close:{color: 'red'}}}
                   overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                   overlayOpacity={0.55}
                   overlayBlur={3}
                   transition="fade"
                   onClose={onCloseWindow}
            >
                <LoadingOverlay visible={visibleLoadingOverlay}/>
                <Divider mb={30}/>
                {content}
            </Modal>
            {controlBtn}
        </>
    );
};


