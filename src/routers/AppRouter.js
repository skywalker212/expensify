import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import Page404 from '../components/Page404.js';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage.js';

const AppRouter = () => (
    <BrowserRouter basename='/expensify'>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={ExpenseDashboardPage}/>
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;