import React, { FunctionComponent } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import css from './Layout.module.css';
import Sidebar from './sidebar/Sidebar';

type ILayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className={css.container}>
            <Header className={css.header} />
            <Sidebar className={css.sidebar} />
            <div className={css.body}>
                {children}
            </div>
            <Footer className={css.footer} />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
