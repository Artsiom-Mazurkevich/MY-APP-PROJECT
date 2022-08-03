import React from 'react';
import {Pagination} from "@mantine/core";

const PaginationPage: React.FC<{countPages: string}> = ({countPages}) => {
    return (
        <Pagination style={{gap: '4px'}} total={+countPages} radius={'lg'} noWrap/>
    );
};

export {PaginationPage};