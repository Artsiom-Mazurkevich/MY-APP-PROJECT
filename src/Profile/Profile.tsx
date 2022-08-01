import React from 'react';
import s from './Profile.module.css'
import {
    ActionIcon,
    Avatar, Badge,
    Button,
    Center,
    Group,
    Indicator,
    Input, MANTINE_SIZES,
    Modal,
    Paper, Stack,
    Text,
    TextInput
} from "@mantine/core";
import {IconCamera, IconLogout, IconPencil} from "@tabler/icons";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useInputState} from "@mantine/hooks";
import {setNewAvatar, setNewNameUser} from "../redux/profileReducer";
import {logOut} from "../redux/loginReducer";

export const Profile = React.memo((props) => {

    const email = useAppSelector(state => state.login.email)
    const {name, avatar} = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()

    const [editMode, setEditMode] = React.useState<boolean>(false)
    const [nameUser, setNameUser] = useInputState(name);
    const [opened, setOpened] = React.useState(false);
    const [urlAvatar, setUrlAvatar] = useInputState(avatar);

    const handleSetNewName = (e: any) => {
        dispatch(setNewNameUser(nameUser))
        setEditMode(!editMode)
    }

    const handleChangingAvatar = () => {
        if (avatar !== urlAvatar) {
            dispatch(setNewAvatar(urlAvatar))
        }
        setOpened(false);
    }

    return <>

        <Modal centered
               size={500}
               overlayBlur={5}
               overflow="inside"
               opened={opened}
               transition="fade"
               onClose={() => setOpened(false)}>
            <Stack spacing={'xl'} p={10}>
                <Text size={'lg'} weight={500}>Insert new url to change avatar!</Text>
                <TextInput placeholder={'URL'}
                           autoFocus
                           onChange={setUrlAvatar}
                           value={urlAvatar}/>
                <Button color={'green'} onClick={handleChangingAvatar}>Change Avatar</Button>
            </Stack>
        </Modal>


        <div className={s.mainProfileContainer}>
            <Paper radius={'md'} withBorder shadow={'sm'} p={'md'}
                   sx={(theme) => ({minWidth: '32%', alignItems: 'center'})}>

                <h1 className={s.personalInformation}>Personal Information</h1>

                <Group position={'center'}>
                    <Indicator offset={25} className={s.actionIconCamera} color={'gray'}
                               onClick={() => setOpened(true)} inline label={<IconCamera size={25}/>}
                               size={38} position={'bottom-end'} withBorder>
                        <Avatar size={140}
                                src={avatar}
                                radius={120}
                                alt={'avatar'}
                                mx={'auto'}
                                mb={'10%'}>
                        </Avatar>
                    </Indicator>
                </Group>


                <div className={s.nameWithPencil}>
                    {!editMode
                        ? <>
                            <h2 className={s.nameUser}>{name}</h2>
                            <ActionIcon onClick={() => {
                                setEditMode(!editMode)
                            }}>
                                <IconPencil/>
                            </ActionIcon>
                        </>
                        : <Input className={s.input} autoFocus value={nameUser} onChange={setNameUser}
                                 onBlur={handleSetNewName}/>
                    }
                </div>

                <Text align="center" color="dimmed" size="md" mb={'10%'}>
                    <Badge size={'xl'} color={'pink'}>{email}</Badge>
                </Text>


                <Center>
                    <Button mb={25} leftIcon={<IconLogout/>} radius={'xl'} variant={'default'} size={'md'}
                            onClick={() => {
                                dispatch(logOut())
                            }}>
                        Log out
                    </Button>
                </Center>

            </Paper>
        </div>
    </>
})


