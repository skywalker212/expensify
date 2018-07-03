import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import Page404 from '../components/Page404.js';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path={process.env.PUBLIC_URL? process.env.PUBLIC_URL + '/' : '/'} component={ExpenseDashboardPage}/>
                <Route path={process.env.PUBLIC_URL? process.env.PUBLIC_URL + '/create' : '/create'} component={AddExpensePage} />
                <Route path={process.env.PUBLIC_URL? process.env.PUBLIC_URL + '/edit/:id' : '/edit/:id'} component={EditExpensePage} />
                <Route path={process.env.PUBLIC_URL? process.env.PUBLIC_URL + '/help' : '/help'} component={HelpPage} />
                <Route component={Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;