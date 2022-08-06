import React from 'react';
import {Container, Header} from '@mantine/core';
import {IconDatabase, IconUser,} from '@tabler/icons';
import {NavLink, Outlet} from "react-router-dom";
import s from './MainContent.module.css';
import {useAppSelector} from "../redux/store";


const data = [
    {link: '/', label: 'Profile', icon: IconUser, value: 'profile'},
    {link: '/cardPacks', label: 'Packs List', icon: IconDatabase, value: 'packsList'},
];


export function MainContent() {

    const isLoggedIn = useAppSelector(state => state.login._id)


    const links = data.map((item) => (
        <NavLink
            className={({isActive}) => (isActive ? s.activeLink : s.defaultLink)}
            to={item.link}
            key={item.label}
        >
            <item.icon className={s.linkIcon}/>
            <span>{item.label}</span>
        </NavLink>
    ));


    return (
        <>
            {isLoggedIn &&
                        <Header height={'6vh'} >
                            <Container size={'xl'} className={s.containerLinks}>
                                <div className={s.divLinks}>{links}</div>
                            </Container>
                        </Header>
            }
            <Outlet/>
        </>
    );
}





