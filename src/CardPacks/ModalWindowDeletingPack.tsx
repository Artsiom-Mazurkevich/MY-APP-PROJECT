import React from 'react';
import {ActionIcon, Badge, Button, Divider, Group, LoadingOverlay, Mark, Modal, Text} from "@mantine/core";
import {IconTrash} from "@tabler/icons";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setDeletingPack} from "../redux/modalReducer";




const ModalWindowDeletingPack = (props: {packName: string}) => {
    const dispatch = useAppDispatch()
    const opened = useAppSelector(state => state.modal.isOpenDeletingPack)

    return (
        <>
            <Modal centered
                   size={'lg'}
                   opened={opened}
                   title={'Delete Pack'}
                   styles={{close:{color: 'red'}}}
                   overlayBlur={3}
                   transition="fade"
                   onClose={() => {dispatch(setDeletingPack(false))}}
            >
                <LoadingOverlay visible={false}/>
                <Divider mb={30}/>
                <Text mb={30}>Do you really want to remove <Mark color={'red'}><b>{props.packName}</b></Mark> ? <br/> All cards will be deleted.</Text>
                <Group align={'center'} position={'apart'}>
                    <Button radius={'xl'} variant={'default'}>Cancel</Button>
                    <Button radius={'xl'} color={'red'}>Delete</Button>
                </Group>
            </Modal>
            <ActionIcon color="red" onClick={() => dispatch(setDeletingPack(!opened))}>
                <IconTrash/>
            </ActionIcon>
        </>
    );
};

export {ModalWindowDeletingPack};