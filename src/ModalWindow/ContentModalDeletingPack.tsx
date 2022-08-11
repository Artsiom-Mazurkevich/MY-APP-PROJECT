import React from 'react';
import {Button, Group, Mark, Text} from "@mantine/core";
import {useAppDispatch} from "../redux/store";
import {setDeletingPack} from "../redux/modalReducer";


const ContentModalDeletingPack = (props: { packName: string }) => {
    const dispatch = useAppDispatch()

    return (
        <>
                <Text mb={30}>Do you really want to remove <Mark
                    color={'red'}><b>{props.packName}</b></Mark> ? <br/> All cards will be deleted.</Text>
                <Group align={'center'} position={'apart'}>
                    <Button radius={'xl'} variant={'default'}
                            onClick={() => dispatch(setDeletingPack(false))}>Cancel</Button>
                    <Button radius={'xl'} color={'red'}>Delete</Button>
                </Group>
        </>
    );
};

export {ContentModalDeletingPack};