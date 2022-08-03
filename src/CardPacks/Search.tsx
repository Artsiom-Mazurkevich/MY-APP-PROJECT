import React, {useEffect} from 'react';
import {TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons";
import {useDebouncedValue} from "@mantine/hooks";
import {useAppDispatch} from "../redux/store";
import {searchPackName} from "../redux/cardsPackReducer";

const Search = () => {

    const dispatch = useAppDispatch()

    const [value, setValue] = React.useState('');
    const [debounced] = useDebouncedValue(value, 500);

    useEffect(() => {
        dispatch(searchPackName(debounced))
    }, [debounced])

    return (
            <TextInput
                label="Search"
                icon={<IconSearch/>}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                placeholder="Provide your text"
            />
    );
};

export {Search};