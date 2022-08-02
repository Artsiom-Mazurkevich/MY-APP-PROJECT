import React from 'react';
import {Select} from "@mantine/core";

const SelectCountCardsPerPage = () => {
    const data = ['7','10','15', '20']
    // const [data, setData] = React.useState([
    //     { value: '1', label: '1' },
    //     { value: '2', label: '2' },
    // ]);
    const [value, setValue] = React.useState('7');
    return (
        <Select dropdownPosition="flip" value={value} onChange={() => setValue} data={data} label="Cards per Page"/>
    );
};

export {SelectCountCardsPerPage};