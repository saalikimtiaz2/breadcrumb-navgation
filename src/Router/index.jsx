import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Project = lazy(() => import('pages/Project'));
const Game = lazy(() => import('pages/Games'));
const Setting = lazy(() => import('pages/Setting'));

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project',
    name: 'My Project',
    component: Project,
  },
  {
    path: '/project/game',
    name: 'My Game',
    component: Game,
  },
  {
    path: '/project/game/setting',
    name: 'Setting',
    component: Setting,
  },
];

function Router() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={route.name}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Router;
