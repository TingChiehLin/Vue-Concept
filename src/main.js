import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import NavigationBar from './components/nav/NavigationBar';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Home from './components/Home';
import SearchPage from "./components/SearchPage";

import myFirstPlugin from './plugin/myFirstPlugin';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '', component: Home},
        {path: '/products',component: ProductList},
        {path: '/users', component: UserList},
        {path: '/userform', component: UserForm},
        {path: '/searchpage', component: SearchPage}
    ]
});

const app = createApp(App)

app.component('navgation-bar',NavigationBar)

app.use(myFirstPlugin, {
    color: {
        red: 'red',
        yellow: 'yellow',
        purple: 'purple'
    }
});
app.use(router);

app.mount('#app');

