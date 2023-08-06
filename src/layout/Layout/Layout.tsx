import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.css';

interface LayoutProps {
    children?: ReactNode;
}


export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
