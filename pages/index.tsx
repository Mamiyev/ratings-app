import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';
import Typography from '../components/uikit/typography/Typography';

function Home({ menu }: HomeProps): JSX.Element {
    return (
        <>
            <Typography variant="h1">Лучшие курсы онлайн</Typography>
            <p>Подборки лучших курсов и рейтинги, основанные на реальных отзывах.</p>
            <h3>Для просмотра списка курсов выберите категорию из меню</h3>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory,
    });
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
