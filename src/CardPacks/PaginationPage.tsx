import React from 'react';
import {Pagination} from "@mantine/core";

const PaginationPage = () => {
    return (
        <Pagination style={{gap: '4px'}} total={800} radius={'lg'} noWrap/>
    );
};

export {PaginationPage};