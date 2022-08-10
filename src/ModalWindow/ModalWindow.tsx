import React, {ReactNode, useEffect} from 'react';
import {Button, ButtonVariant, Divider, LoadingOverlay, MantineNumberSize, Modal, TextInput} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setOpened} from "../redux/modalReducer";


interface ModalWindowProps {
    children: ReactNode
    titleWindow: string
    titleBtn: string
    variantBtn?: ButtonVariant
    radiusBtn?: MantineNumberSize
}


export const ModalWindow = (
    {
        children,
        variantBtn = 'filled',
        radiusBtn = 'xl',
        titleBtn,
        titleWindow
    }: ModalWindowProps) => {

    const opened = useAppSelector(state => state.modal.isOpenCreatingPack)
    const visible = useAppSelector(state => state.cardsPack.creatingPack)
    const dispatch = useAppDispatch()



    return (
        <>
            <Modal centered
                   size={'lg'}
                   opened={opened}
                   title={titleWindow}
                   styles={{close:{color: 'red'}}}
                   overlayBlur={3}
                   transition="fade"
                   onClose={() => dispatch(setOpened(false))}
            >
                <LoadingOverlay visible={visible}/>
                <Divider mb={30}/>
                {children}
            </Modal>
            <Button variant={variantBtn} radius={radiusBtn}
                    onClick={() => dispatch(setOpened(!opened))}>{titleBtn}</Button>
        </>
    );
};


