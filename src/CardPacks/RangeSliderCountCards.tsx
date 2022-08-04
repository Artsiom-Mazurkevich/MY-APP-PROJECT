import React, {useEffect} from 'react';
import {RangeSlider} from "@mantine/core";
import {useAppDispatch} from "../redux/store";
import {useDebouncedValue} from "@mantine/hooks";
import {change_Min_Max_Cards} from "../redux/cardsPackReducer";

const RangeSliderCountCards = () => {

    const dispatch = useAppDispatch()

    const [value, setValue] = React.useState<[number, number]>([0,110]);
    const [debounced] = useDebouncedValue(value, 500);


    useEffect(() => {
        dispatch(change_Min_Max_Cards(debounced))
    }, [debounced])


    return (
        <RangeSlider labelAlwaysOn defaultValue={value} onChange={setValue} minRange={1}/>
    );
};

export {RangeSliderCountCards};