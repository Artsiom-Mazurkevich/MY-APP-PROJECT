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
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {ContentModalCreatingPack} from "../ModalWindow/ContentModalCreatingPack";
import {setCreatingPack} from "../redux/modalReducer";

export const CardPacks = () => {
    const dispatch = useAppDispatch()
    const {
        packName,
        min,
        max,
        sortPacks,
        page,
        pageCount,
        user_id,
        cardPacksTotalCount,
        cardPacks
    } = useAppSelector(state => state.cardsPack)
    let countPages = (cardPacksTotalCount / pageCount).toFixed()


    useEffect(() => {
        dispatch(getCards(packName, min, max, sortPacks, page, pageCount, user_id))
    }, [packName, min, max, sortPacks, page, pageCount, user_id, cardPacksTotalCount, dispatch])


    return (
        <Container mt={30} size={'xl'} pb={30}>
            <Paper radius={'md'} withBorder shadow={'sm'} p={'xl'}>
                <Group position={'apart'} mb={30}>
                    <Text align={'left'} weight={500} size={'xl'}>Packs List</Text>
                    <ModalWindow
                        titleWindow={'Creating Pack'}
                        content={<ContentModalCreatingPack/>}
                        onCloseWindow={() => dispatch(setCreatingPack(false))}
                        controlBtn={<Button radius={'xl'} onClick={() => dispatch(setCreatingPack(true))}>Create Pack</Button>}
                        openedWindow={useAppSelector(state => state.modal.isOpenCreatingPack)}
                        visibleLoadingOverlay={useAppSelector(state => state.cardsPack.creatingPack)}
                    />
                </Group>
                <Grid align={'end'} justify={'space-between'} grow gutter={'xl'} mb={30}>
                    <Grid.Col span={4}><Search/></Grid.Col>
                    <Grid.Col span={3}><ControlMyAll/></Grid.Col>
                    <Grid.Col span={3}><RangeSliderCountCards/></Grid.Col>
                </Grid>
                <TablePacks elements={cardPacks}/>
                <Divider/>

                <Group mt={20} align={'end'} position={'apart'}>
                    <PaginationPage countPages={countPages} currentPage={page}/>
                    <SelectCountCardsPerPage/>
                </Group>
            </Paper>
        </Container>
    );
};

