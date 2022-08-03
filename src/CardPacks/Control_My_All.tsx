import React from 'react';
import {SegmentedControl} from "@mantine/core";

const ControlMyAll:React.FC<{user_id: string}> = ({user_id}) => {
    const [value, setValue] = React.useState('all');
    return (
        <SegmentedControl
            size={'sm'}
            transitionDuration={400}
            fullWidth
            style={{minWidth: '300px'}}
            transitionTimingFunction="linear"
            value={value}
            onChange={setValue}
            data={[
                { label: 'My', value: 'my' },
                { label: 'All', value: 'all' },
            ]}
        />
    );
};

export {ControlMyAll};