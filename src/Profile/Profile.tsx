import React from 'react';
import s from './Profile.module.css'
import {ActionIcon, Avatar, Button, Center, Input, Modal, Paper, Text, TextInput} from "@mantine/core";
import {IconCamera, IconLogout, IconMoodBoy, IconPencil} from "@tabler/icons";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useInputState} from "@mantine/hooks";
import {logOut, setNewNameUser} from "../redux/profileReducer";
import {Dropzone, IMAGE_MIME_TYPE} from "@mantine/dropzone";

export const Profile = React.memo((props) => {
    const email = useAppSelector(state => state.login.email)
    const name = useAppSelector(state => state.profile.name)
    const dispatch = useAppDispatch()
    const [editMode, setEditMode] = React.useState<boolean>(false)
    const [nameUser, setNameUser] = useInputState(name);
    const [opened, setOpened] = React.useState(false);

    const handleSetNewName = (e: any) => {
        dispatch(setNewNameUser(nameUser))
        setEditMode(!editMode)
    }

    return <>
        <Modal centered
               opened={opened}
               transition="fade"
               onClose={() => setOpened(false)}>
            <TextInput placeholder={'paste URL'} autoFocus/>
        </Modal>
        <div className={s.mainProfileContainer}>
            <Paper radius={'md'} withBorder shadow={'sm'} p={'md'}
                   sx={(theme) => ({minWidth: '32%', alignItems: 'center'})}>
                <h1 className={s.personalInformation}>Personal Information</h1>
                <Avatar size={140} radius={120} alt={'avatar'} mx={'auto'} mb={'10%'}>
                    <IconMoodBoy size={100}/>
                    <ActionIcon className={s.actionIconCamera} onClick={() => setOpened(true)}>
                        <IconCamera/>
                    </ActionIcon>
                </Avatar>


                <div className={s.nameWithPencil}>
                        {!editMode
                            ? <>
                                <h2 className={s.nameUser}>{name}</h2>
                                <ActionIcon onClick={() => {setEditMode(!editMode)}}>
                                    <IconPencil/>
                                </ActionIcon>
                            </>
                            : <Input className={s.input} autoFocus value={nameUser} onChange={setNameUser} onBlur={handleSetNewName}/>
                        }
                </div>
                <Text align="center" color="dimmed" size="md" mb={'10%'}>{email}</Text>
                <Center>
                    <Button leftIcon={<IconLogout/>} radius={'xl'} variant={'default'} size={'md'} onClick={() => {dispatch(logOut())}}>
                        Log out
                    </Button>
                </Center>
            </Paper>
        </div>
    </>
})


