import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/orders',
        title: 'Blocks',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: '/locations',
        title: 'Transactions',
    },
    {
        id: 4,
        icon: ShippingIcon,
        path: '/locations2',
        title: 'Builders',
    },
    {
        id: 5,
        icon: UserIcon,
        path: '/profile',
        title: 'About',
    }
]

export default sidebar_menu;