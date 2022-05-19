import type { NextPage } from 'next';
import Head from 'next/head';

import HomeView from '../views/HomeView';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zhijie Zhu</title>
        <meta name="description" content="Zhijie Zhu's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeView />
    </div>
  );
};

export default Home;
