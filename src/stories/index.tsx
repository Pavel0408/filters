import React from "react";
import  styled  from 'styled-components'
import { Provider } from "react-redux";
import { createStore } from "redux";
import { PageOneContainer, PageTwoContainer, PageThreeContainer } from './pages'
import { devToolsEnhancer } from 'redux-devtools-extension';


import { filterReducer } from "../reducer";
import { data } from "./dummyData";
import { getAllFiltersSuccess } from "../actions";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; 

import "./index.css";


const store = createStore(filterReducer, devToolsEnhancer({}));
setTimeout(() => store.dispatch(getAllFiltersSuccess(data)), 10);


const Header = styled.div`
  height: 50px;
  ul {
    display: flex;
    width: 100vw;
    justify-content: center;
    list-style-type: none;
    li {
      flex-basis: 150px;
      font-size: 20px;
      a {
        text-decoration: none;
        :hover {
          text-decoration: underline
        }
      }
    }
  }
`






export const App = () => (
  <Provider store={store}>
    <Router>
      <Header>
        <ul>
          <li> <Link to='/' >One</Link> </li>
          <li> <Link to='/two' >Two</Link> </li>
          <li> <Link to='/three' >Three</Link> </li>
        </ul>
      </Header>
      <Switch>
        <Route path="/" exact component={ PageOneContainer } />
        <Route path="/two" component={ PageTwoContainer } />
        <Route path="/three" component={ PageThreeContainer } />
      </Switch>
    </Router>
  </Provider>
)
