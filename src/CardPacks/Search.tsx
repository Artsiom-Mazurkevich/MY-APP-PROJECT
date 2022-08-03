import React from 'react';
import {TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons";

const Search:React.FC<{packName: string}> = ({packName}) => {
    return (
            <TextInput
                label="Search"
                icon={<IconSearch/>}
                placeholder="Provide your text"
            />
    );
};

export {Search};