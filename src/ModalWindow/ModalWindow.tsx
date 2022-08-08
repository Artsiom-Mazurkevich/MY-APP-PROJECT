import React, {ReactNode, useEffect} from 'react';
import {Button, ButtonVariant, Divider, MantineNumberSize, Modal, TextInput} from "@mantine/core";
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
    const dispatch = useAppDispatch()
    // const [opened, setOpened] = React.useState(false);





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
                   // onClose={() => setOpened(false)}
            >
                <Divider mb={30}/>
                {children}
            </Modal>
            <Button variant={variantBtn} radius={radiusBtn}
                    onClick={() => dispatch(setOpened(!opened))}>{titleBtn}</Button>
        </>
    );
};


