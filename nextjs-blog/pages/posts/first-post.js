// The route of this page is exactly like the file path.
// On the local dev environment, this would be
// http://localhost:3000/posts/first-post

// Building pages with Next is similar to building pages with HTML files.
// You're just using JSX and React components instead!

import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/layout';

const FirstPost = () => (
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>

    <h1>First Post</h1>
    <h2>
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </h2>
  </Layout>
);

export default FirstPost;
