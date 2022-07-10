import React from 'react';
import {Container, Header} from '@mantine/core';
import {IconDatabase, IconUser,} from '@tabler/icons';
import {NavLink} from "react-router-dom";
import s from './NavigationPanel.module.css';


const data = [
    {link: '/profile', label: 'Profile', icon: IconUser },
    {link: '/cardPacks', label: 'Packs List', icon: IconDatabase },
];

export function NavigationPanel() {

    const links = data.map((item) => (
        <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.defaultLink)}
            to={item.link}
            key={item.label}
        >
            <item.icon className={s.linkIcon} />
            <span>{item.label}</span>
        </NavLink>
    ));

    return (
        <Header height={'7vh'} style={{backgroundColor: '#EBE0E9'}}>
            <Container className={s.containerLinks}>
                {links}
            </Container>
        </Header>
    );
}





