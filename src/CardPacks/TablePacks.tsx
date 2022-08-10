import React from 'react';
import {ActionIcon, Group, LoadingOverlay, Table} from "@mantine/core";
import {IconPencil, IconSchool, IconTrash} from "@tabler/icons";
import {useAppSelector} from "../redux/store";
import {useNavigate} from "react-router-dom";
import {ModalWindowDeletingPack} from "./ModalWindowDeletingPack";

const TablePacks: React.FC<{ elements: any }> = ({elements}) => {

    const navigate = useNavigate()

    const user_id = useAppSelector(state => state.login._id)
    const loading = useAppSelector(state => state.cardsPack.isFetching)
    console.log(user_id)


    const rows = elements.map((element: any) => (
                <tr key={element._id} onClick={() => {}}>
                    <td onClick={() => {navigate(`${element._id}`)}}>{element.name}</td>
                    <td>{element.cardsCount}</td>
                    <td>{new Date(element.updated).toLocaleDateString()}</td>
                    <td>{element.user_name}</td>
                    <td>
                        <Group align={'center'}>
                            {user_id === element.user_id && <ModalWindowDeletingPack packName={element.name} />
                            //     <ActionIcon color="red">
                            //     <IconTrash/>
                            // </ActionIcon>
                            }
                            {user_id === element.user_id && <ActionIcon color={'orange'}>
                                <IconPencil/>
                            </ActionIcon>}
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