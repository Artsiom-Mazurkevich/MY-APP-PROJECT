import React, {useEffect} from 'react';
import {Button, Container, Group, Pagination, Paper, Title} from "@mantine/core";
import {IconArrowBigLeft} from "@tabler/icons";
import {Search} from "../CardPacks/Search";
import {TableCards} from "./TableCards";
import {SelectCountCardsPerPage} from "../CardPacks/SelectCountCardsPerPage";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {changePage, getUserCards} from "../redux/cardsReducer";

const Cards = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {pageCount, page} = useAppSelector(state => state.cardsUser.params)
    const totalCards = useAppSelector(state => state.cardsUser.cardsTotalCount)
    const countPages =  +(totalCards / pageCount).toFixed()


    useEffect(() => {
        dispatch(getUserCards(id!, pageCount, page))
    }, [id, pageCount, page])

    return (
        <Container mt={30} size={'xl'} pb={30}>
                <Group position={'left'} align={'center'} >
                    <Button color={'dark'}
                            onClick={() => navigate(-1)}
                            p={0}
                            component="a"
                            style={{fontSize: '1.2rem'}}
                            variant={'subtle'}
                            sx={(theme) => ({'&:hover': {background: 'transparent', color: theme.colors.blue}})}
                            leftIcon={<IconArrowBigLeft/>}>Back to Packs List</Button>
                </Group>
                <Title order={2} mt={20} mb={20}>Name Pack</Title>
            <Search/>
            <Paper><TableCards/></Paper>
            <Group align={'end'} position={'apart'}>
                <Pagination total={countPages} onChange={(e) => dispatch(changePage(e))}/>
                <SelectCountCardsPerPage/>
            </Group>
        </Container>
    );
};

export {Cards};