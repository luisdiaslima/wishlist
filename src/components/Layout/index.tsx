import React from 'react';
import Header from '../Header';
import { Main } from './styles';

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
        </>
    )
}

export default Layout;