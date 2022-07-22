import React from 'react';

type Props = {
    children: JSX.Element,
};


export const FormPage = ({children}: Props) => {

    return (
        <div style={{height: '100vh'}}>
            {children}
        </div>
    );
};

