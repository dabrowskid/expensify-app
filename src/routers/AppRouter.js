import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditPage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;