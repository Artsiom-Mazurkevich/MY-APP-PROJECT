import React, {useEffect} from 'react';
import {Button, Container, Divider, Grid, Group, Paper, Text} from "@mantine/core";
import {Search} from "./Search";
import {ControlMyAll} from "./Control_My_All";
import {RangeSliderCountCards} from "./RangeSliderCountCards";
import {TablePacks} from "./TablePacks";
import {PaginationPage} from "./PaginationPage";
import {SelectCountCardsPerPage} from "./SelectCountCardsPerPage";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {getCards} from "../redux/cardsPackReducer";

export const CardPacks = () => {
    const dispatch = useAppDispatch()
    const {packName, min, max, sortPacks, page, pageCount, user_id, cardPacksTotalCount, cardPacks} = useAppSelector(state => state.cardsPack)
    let countPages = (cardPacksTotalCount / pageCount).toFixed()




    useEffect(() => {
        dispatch (getCards(packName, min, max, sortPacks, page, pageCount, user_id))
    }, [packName, min, max, sortPacks, page, pageCount, user_id, cardPacksTotalCount, dispatch])


    return (
        <Container mt={30} size={'xl'} pb={30}>
            <Paper radius={'md'} withBorder shadow={'sm'} p={'xl'}>
                <Group position={'apart'} mb={30}>
                    <Text align={'left'} weight={500} size={'xl'}>Packs List</Text>
                    <Button radius={'xl'}>Add new pack</Button>
                </Group>
                <Grid align={'end'} justify={'space-between'} grow gutter={'xl'} mb={30}>
                    <Grid.Col span={4}><Search packName={packName}/></Grid.Col>
                    <Grid.Col span={3}><ControlMyAll/></Grid.Col>
                    <Grid.Col span={3}><RangeSliderCountCards min_max={[min,max]}/></Grid.Col>
                </Grid>
                <TablePacks elements={cardPacks}/>
                <Divider/>

                <Group mt={20} align={'end'} position={'apart'}>
                    <PaginationPage countPages={countPages} currentPage={page}/>
                    <SelectCountCardsPerPage cardsCountOnPage={pageCount}/>
                </Group>
            </Paper>
        </Container>
    );
};

