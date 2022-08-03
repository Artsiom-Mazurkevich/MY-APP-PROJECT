import React from 'react';
import {RangeSlider} from "@mantine/core";

const RangeSliderCountCards: React.FC<{min_max: number[]}> = ({min_max}) => {
    return (
        <RangeSlider labelAlwaysOn defaultValue={[0,110]}/>
    );
};

export {RangeSliderCountCards};