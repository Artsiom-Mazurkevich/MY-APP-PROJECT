import React from 'react';
import {SegmentedControl} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {selectMyCards} from "../redux/cardsPackReducer";

const ControlMyAll = () => {
    const dispatch = useAppDispatch()
    const user_id = useAppSelector(state => state.login._id)

    const [value, setValue] = React.useState('all');

    const onChangeHandler = (e: string) => {
        setValue(e)
        debugger
        if (e === 'my') {
            dispatch(selectMyCards(user_id))
        } else dispatch(selectMyCards(''))
    }

    return (
        <SegmentedControl
            size={'sm'}
            transitionDuration={400}
            fullWidth
            style={{minWidth: '300px'}}
            transitionTimingFunction="linear"
            value={value}
            onChange={(e) => {onChangeHandler(e)}}
            data={[
                {label: 'My', value: 'my'},
                {label: 'All', value: 'all'},
            ]}
        />
    );
};

export {ControlMyAll};