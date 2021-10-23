import React from 'react';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumb';

const crumbs = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/project',
    name: 'My Project',
  },
  {
    path: '/project/game',
    name: 'My Game',
  },
  {
    path: '/project/game/setting',
    name: 'Setting',
  },
];

function Setting() {
  return (
    <Layout>
      <div className="lg:container mx-auto">
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div className="h-3/5 w-100 flex flex-col items-center justify-center">
        <h2 className="text=xl">Setting Page</h2>
      </div>
    </Layout>
  );
}

export default Setting;
