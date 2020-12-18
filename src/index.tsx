import React from 'react';
import { Music } from 'react-feather';
import { BrowserRouter, NavLink, Route, Switch, useLocation } from 'react-router-dom';

import { renderApp } from '../src/util';
import { Home } from './home/home';
import { Sources } from './sources/sources';

import './index.scss';

const App = (props: {}) => {
  const location = useLocation();

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 pb-3 lg:pb-6 shadow-xl">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Music className="mr-2" />
            <span className="font-semibold text-xl tracking-tight">The Baroque Music Period</span>
          </div>
          <div className="text-sm flex-grow align-center">
            <NavLink exact to="/" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Overview</button>
            </NavLink>
            <NavLink to="/sources" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Sources</button>
            </NavLink>
            <a href="https://github.com/notrealn/absolutism-project" className="inliSee Codene-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-3 float-right">
              See Code
            </a>
          </div>
        </div>
      </nav>
      <main>
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sources">
            <Sources />
          </Route>
        </Switch>
      </main>
    </>
  );
};

renderApp(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
