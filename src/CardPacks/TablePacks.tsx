import React from 'react';
import {ActionIcon, Group, Table} from "@mantine/core";
import {IconPencil, IconSchool, IconTrash} from "@tabler/icons";

const TablePacks: React.FC<{ elements: any }> = ({elements}) => {

    const rows = elements.map((element: any) => (
        <tr key={element._id}>
            <td>{element.name}</td>
            <td>{element.cardsCount}</td>
            <td>{element.updated}</td>
            <td>{element.user_name}</td>
            <td>
                <Group align={'center'}>
                    <ActionIcon color="red">
                        <IconTrash/>
                    </ActionIcon>
                    <ActionIcon>
                        <IconPencil/>
                    </ActionIcon>
                    <ActionIcon>
                        <IconSchool/>
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));


    return (
        <div>
            <Table highlightOnHover verticalSpacing={'md'}>
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