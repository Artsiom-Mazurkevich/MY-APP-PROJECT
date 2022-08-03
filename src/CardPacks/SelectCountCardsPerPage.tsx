import React from 'react';
import {Select} from "@mantine/core";
import {useAppDispatch} from "../redux/store";
import {changePageCount} from "../redux/cardsPackReducer";

const SelectCountCardsPerPage: React.FC<{cardsCountOnPage: number}> = ({cardsCountOnPage}) => {

    const dispatch = useAppDispatch()

    const data = [
        {value: '7', label: '7'},
        {value: '10', label: '10'},
        {value: '15', label: '15'},
        {value: '20', label: '20'},
    ]

    return (
        <Select dropdownPosition="flip" defaultValue={'7'} onChange={(e: string ) => dispatch(changePageCount(+e))} data={data} label="Cards per Page"/>
    );
};

export {SelectCountCardsPerPage};