import React from 'react';
import {Table} from "@mantine/core";
import {useAppSelector} from "../redux/store";

const TableCards = () => {

    const elements = useAppSelector(state => state.cardsUser.cards)

    const rows = elements.map((element) => (
        <tr key={element._id}>
            <td>{element.question}</td>
            <td>{element.answer}</td>
            <td>{new Date(element.updated).toLocaleDateString()}</td>
            <td>{element.grade}</td>
        </tr>
    ));

    return (
        <Table mt={35} mb={50} highlightOnHover>
            <thead style={{backgroundColor: 'lightgray'}}>
            <tr>
                <th>Question</th>
                <th>Answer</th>
                <th>Last Updated</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
};

export {TableCards};