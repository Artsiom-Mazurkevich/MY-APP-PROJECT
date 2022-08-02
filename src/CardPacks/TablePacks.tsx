import React from 'react';
import {Container, Table} from "@mantine/core";

const TablePacks = () => {

    const elements = [
        {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
        {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
        {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
        {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
        {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'},
        {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'},
        {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'},
        {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'},
    ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
            <td>{element.mass}</td>
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