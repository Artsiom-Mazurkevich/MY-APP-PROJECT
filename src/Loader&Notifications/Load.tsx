import React from 'react';
import {Loader} from "@mantine/core";

const stylesApp = {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
} as {}


export const Load = () => {
    return (
        <div style={stylesApp}>
            <Loader color="grape" size="xl"/>
        </div>
    );
};

