import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { ContainerLayout, Main } from './styles';

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <ContainerLayout>
            <Header />
            <Main>
                {children}
            </Main>

            <Footer />
        </ContainerLayout>
    )
}

export default Layout;