import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from '../../components/uikit/button/Button';
import BurgerIcon from '../../components/uikit/icons/BurgerIcon';
import CloseIcon from '../../components/uikit/icons/CloseIcon';
import Sidebar from '../sidebar/Sidebar';
import css from './Header.module.css';

type IHeaderProps = {
    className?: string;
};

const Header: React.FC<IHeaderProps> = ({ className }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            },
        },
        closed: {
            opacity: shouldReduceMotion ? 1 : 0,
            x: '100%',
        },
    };

    return (
        <header className={clsx(css.header, className)}>
            <span className={css.logo}>Ratings App</span>
            <Button className={css.searchButton} color="ghost" onClick={() => setIsOpened(true)}>
                <BurgerIcon />
            </Button>
            <motion.div
                className={css.mobileMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar className={css.sidebar} />
                <Button className={css.menuClose} color="ghost" onClick={() => setIsOpened(false)}>
                    <CloseIcon />
                </Button>
            </motion.div>
        </header>
    );
};

export default Header;
