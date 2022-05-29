import type { NextPage } from 'next';
import Head from 'next/head';

import ViewLayout from '../components/ViewLayout';
import Navbar from '../components/Navbar';
import HomeView from '../views/HomeView';
import ProjectsView from '../views/ProjectsView';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zhijie Zhu</title>
        <meta name="description" content="Zhijie Zhu's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <ViewLayout polygon className="h-192">
        <HomeView />
      </ViewLayout>

      <ViewLayout>
        <ProjectsView />
      </ViewLayout>
    </div>
  );
};

export default Home;
