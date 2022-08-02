import React from 'react';
import {TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons";

const Search = () => {
    return (
            <TextInput
                label="Search"
                icon={<IconSearch/>}
                placeholder="Provide your text"
            />
    );
};

export {Search};