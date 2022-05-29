import Head from 'next/head';
import { useRef } from 'react';
import type { NextPage } from 'next';

import type { ViewName } from '../types';
import HomeView from '../views/HomeView';
import Navbar from '../components/Navbar';
import ProjectsView from '../views/ProjectsView';
import ViewLayout from '../components/ViewLayout';

type ViewRef = {
  [key in ViewName]: HTMLDivElement | null;
};

const Home: NextPage = () => {
  const viewRefs = useRef<ViewRef>({
    home: null,
    projects: null,
    about: null
  });

  return (
    <>
      <Head>
        <title>Zhijie Zhu</title>
        <meta name="description" content="Zhijie Zhu's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <ViewLayout
        polygon
        className="h-192"
        refCallback={(el) => (viewRefs.current.home = el)}
      >
        <HomeView />
      </ViewLayout>

      <ViewLayout refCallback={(el) => (viewRefs.current.projects = el)}>
        <ProjectsView />
      </ViewLayout>
    </>
  );
};

export default Home;
