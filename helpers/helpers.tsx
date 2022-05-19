import BooksIcon from '../components/uikit/icons/BooksIcon';
import CoursesIcon from '../components/uikit/icons/CoursesIcon';
import ProductsIcon from '../components/uikit/icons/ProductsIcon';
import ServicesIcon from '../components/uikit/icons/ServicesIcon';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];
