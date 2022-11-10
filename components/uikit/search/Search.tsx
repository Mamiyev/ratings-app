import React, { FormHTMLAttributes } from 'react';
import Button from '../button/Button';
import SearchIcon from '../icons/SearchIcon';
import Input from '../input/Input';
import css from './Search.module.css';

type ISearchProps = {} & FormHTMLAttributes<HTMLFormElement>;

const Search: React.FC<ISearchProps> = ({ ...props }) => {
    return (
        <form className={css.search} {...props}>
            <Input className={css.searchInput} placeholder="Поиск" />
            <Button className={css.searchButton} color="primary">
                <SearchIcon />
            </Button>
        </form>
    );
};

export default Search;
