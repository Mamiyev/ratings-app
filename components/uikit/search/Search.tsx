import { useRouter } from 'next/router';
import React, { ChangeEvent, HTMLAttributes, useState } from 'react';
import Button from '../button/Button';
import SearchIcon from '../icons/SearchIcon';
import Input from '../input/Input';
import css from './Search.module.css';

type ISearchProps = {} & HTMLAttributes<HTMLDivElement>;

const Search: React.FC<ISearchProps> = ({ ...props }) => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    console.log(search);

    const onSearchSubmit = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search,
            },
        });
    };

    return (
        <div className={css.search} {...props}>
            <Input className={css.searchInput} placeholder="Поиск" value={search} onChange={handleSearch} />
            <Button className={css.searchButton} color="primary" onClick={onSearchSubmit}>
                <SearchIcon />
            </Button>
        </div>
    );
};

export default Search;
