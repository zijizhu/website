import type { NextPage } from 'next';
import Head from 'next/head';

import HomeButton from '../components/HomeButton';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zhijie Zhu</title>
        <meta name="description" content="Zhijie Zhu's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>hello world</div>
        <HomeButton />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
