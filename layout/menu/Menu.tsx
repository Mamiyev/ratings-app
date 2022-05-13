import clsx from 'clsx';
import React, { HtmlHTMLAttributes, useContext } from 'react';
import css from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import CoursesIcon from '../../components/uikit/icons/CoursesIcon';
import ServicesIcon from '../../components/uikit/icons/ServicesIcon';
import BooksIcon from '../../components/uikit/icons/BooksIcon';
import ProductsIcon from '../../components/uikit/icons/ProductsIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

const Menu = ({ ...props }): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(
            menu.map((m) => {
                if (m._id.secondCategory === secondCategory) {
                    m.isOpened = !m.isOpened;
                }
                return m;
            }),
        );
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((m) => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <a>
                                <div
                                    className={clsx(css.firstLevel, { [css.firstLevelActive]: m.id === firstCategory })}
                                >
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={css.secondBlock}>
                {menu.map((m) => {
                    if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={css.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                                {m._id.secondCategory}
                            </div>
                            <div className={clsx(css.secondLevelBlock, { [css.secondLevelBlockOpened]: m.isOpened })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return pages.map((p) => (
            <Link href={`/${route}/${p.alias}`}>
                <a
                    className={clsx(css.thirdLevel, {
                        [css.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
                    })}
                >
                    {p.category}
                </a>
            </Link>
        ));
    };

    return <div className={css.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
