import React from 'react';
import { Link } from 'react-router-dom';
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
];

function Project() {
  return (
    <Layout>
      <div className="lg:container mx-auto">
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div className="h-3/5 w-100 flex flex-col items-center justify-center">
        <h2 className="text-xl">Project Page</h2>
        <Link to="/project/game">
          <button className="bg-black text-white py-2 px-10 mt-6">Game</button>
        </Link>
      </div>
    </Layout>
  );
}

export default Project;
