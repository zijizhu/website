import Head from 'next/head';
import type { NextPage } from 'next';

import HomeView from '../views/HomeView';
import Navbar from '../components/Navbar';
import ProjectsView from '../views/ProjectsView';
import ViewLayout from '../components/ViewLayout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zhijie Zhu</title>
        <meta name="theme-color" content="#F4F5F7" />
        <meta name="description" content="Zhijie Zhu's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <ViewLayout polygon view="home" className="h-192">
        <HomeView />
      </ViewLayout>

      <ViewLayout view="projects">
        <ProjectsView />
      </ViewLayout>
    </>
  );
};

export default Home;
