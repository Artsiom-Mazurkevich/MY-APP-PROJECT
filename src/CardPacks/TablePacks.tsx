import React from 'react';
import {ActionIcon, Group, LoadingOverlay, Table, Text} from "@mantine/core";
import {IconPencil, IconSchool, IconTrash} from "@tabler/icons";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useNavigate} from "react-router-dom";
import {ContentModalEditedPack} from "../ModalWindow/ContentModalEditedPack";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {setDeletingPack, setEditablePack} from "../redux/modalReducer";
import {ContentModalDeletingPack} from "../ModalWindow/ContentModalDeletingPack";

const TablePacks: React.FC<{ elements: any }> = ({elements}) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isOpenDeletingPack, isDeletingPack} = useAppSelector(state => state.modal)
    const {isOpenEditablePack, isEditedPack} = useAppSelector(state => state.modal)

    const user_id = useAppSelector(state => state.login._id)
    const loading = useAppSelector(state => state.cardsPack.isFetching)


    const rows = elements.map((element: any) => (
                <tr key={element._id}>
                    <td onClick={() => {navigate(`${element._id}`)}}><Text sx={{
                        '&:hover': {
                            cursor: 'pointer',
                        }
                    }} color={'blue'} variant="link" component="a">{element.name}</Text></td>
                    <td>{element.cardsCount}</td>
                    <td>{new Date(element.updated).toLocaleDateString()}</td>
                    <td>{element.user_name}</td>
                    <td>
                        <Group align={'center'}>
                            {user_id === element.user_id &&
                                <ModalWindow
                                    content={<ContentModalDeletingPack packName={element.name}/>}
                                    titleWindow={'Delete Pack'}
                                    controlBtn={<ActionIcon color="red" onClick={() => dispatch(setDeletingPack(true))}><IconTrash/></ActionIcon>}
                                    onCloseWindow={() => dispatch(setDeletingPack(false))}
                                    openedWindow={isOpenDeletingPack}
                                    visibleLoadingOverlay={isDeletingPack}
                                />
                            }
                            {user_id === element.user_id &&
                                <ModalWindow
                                    content={<ContentModalEditedPack/>}
                                    titleWindow={'Edit Pack'}
                                    controlBtn={<ActionIcon color="orange" onClick={() => dispatch(setEditablePack(true))}><IconPencil/></ActionIcon>}
                                    onCloseWindow={() => dispatch(setEditablePack(false))}
                                    openedWindow={isOpenEditablePack}
                                    visibleLoadingOverlay={isEditedPack}
                                />
                            }
                            <ActionIcon color={'green'}>
                                <IconSchool/>
                            </ActionIcon>
                        </Group>
                    </td>
                </tr>
    ));


    return (
        <div style={{position: 'relative'}}>
            <Table highlightOnHover verticalSpacing={'md'}>
                <LoadingOverlay visible={loading}/>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Cards</th>
                    <th>Last Updated</th>
                    <th>Created by</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export {TablePacks};