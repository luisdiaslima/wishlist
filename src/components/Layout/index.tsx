import React from 'react';
import Header from '../Header';

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <Header />
            <div style={{ marginTop: 160 }}>
                {children}
            </div>
        </>
    )
}

export default Layout;