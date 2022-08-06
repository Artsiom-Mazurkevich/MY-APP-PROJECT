import React from 'react';
import {Pagination} from "@mantine/core";
import {useAppDispatch} from "../redux/store";
import {changeCurrentPage} from "../redux/cardsPackReducer";

const PaginationPage: React.FC<{ countPages: string, currentPage: number }> = ({countPages, currentPage}) => {
    const dispatch = useAppDispatch()


    const onChangeHandler = (e: number) => {
        dispatch(changeCurrentPage(e))
    }

    return (
        <Pagination page={currentPage}
                    onChange={(e) => onChangeHandler(e)}
                    style={{gap: '4px'}}
                    total={+countPages}
                    radius={'lg'} noWrap
        />
    );
};

export {PaginationPage};