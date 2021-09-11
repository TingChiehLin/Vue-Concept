import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import NavigationBar from './components/nav/NavigationBar';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Home from './components/Home';
import SearchPage from "./components/SearchPage";
import ProductDetail from "./components/ProductDetail";
import DynamicRoute from './components/DynamicRoute';

import myFirstPlugin from './plugin/myFirstPlugin';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '', component: Home},
        {
            path: '/products',
            component: ProductList,
            children: [
                {path: ':productId', component: ProductDetail, props: true}
            ]
        },
        {path: '/users', component: UserList, props: {useAlert: false}},
        {path: '/userform', component: UserForm},
        {path: '/searchpage', component: SearchPage},
        {
            path: '/dynamicroute/:routeId',
            component: DynamicRoute,
            props: routeId => ({query: "RouteId: " + routeId.params.routeId})
        },
        {path: '/:notFound(.*)', redirect: '/'}
    ]
});

const app = createApp(App)

app.component('navgation-bar', NavigationBar)

app.use(myFirstPlugin, {
    color: {
        red: 'red',
        yellow: 'yellow',
        purple: 'purple'
    }
});
app.use(router);

app.mount('#app');

