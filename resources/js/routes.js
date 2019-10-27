import Search   from './components/pages/Search';
import Home     from './components/pages/Home';
import About    from './components/pages/About';
import Test     from './components/pages/Test';

export const routes = [
    {
        path: "/",
        exact: true,
        name: 'Home',
        component: Home
    },
    {
        path: "/search",
        name: 'Search',
        component: Search
    },
    {
        path: "/about",
        name: 'About',
        component: About
    },
    {
        path: "/Test",
        name: 'test',
        component: Test
    },
];
