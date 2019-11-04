import Home     from './components/pages/Home';
import About    from './components/pages/About';
import Test     from './components/pages/Test';
import Category from "./components/pages/Category";
import Model    from "./components/pages/Model";
import Product  from "./components/pages/Product";

export const routes = [
    { path: "/",                name: 'Home',       component: Home,       exact: true },
    { path: "/about",           name: 'About',      component: About,   show: true },
    { path: "/test",            name: 'Test',       component: Test,    show: true },
    { path: "/category/:slug",  name: 'Category',   component: Category},
    { path: "/model/:id",       name: 'Model',      component: Model},
    { path: "/product/:id",     name: 'Product',    component: Product}
];
