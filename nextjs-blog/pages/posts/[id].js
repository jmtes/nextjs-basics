// DYNAMIC ROUTING
// Pages wrapped in [] are dynamic routes in Next.js.

import Head from 'next/head';

import Layout from '../../components/layout';
import Date from '../../components/date';

import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData: { title, id, date, contentHtml } }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Layout>
      {title}
      <br />
      <Date dateString={date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </Layout>
  </>
);

// getStaticPaths returns a list of possible values for the `id` in this
// filename.
export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  // The array of possible values for `id` must be the value of the `paths`
  // key in the returned object, which is exactly what getAllPostIds()
  // returns.
  return { paths, fallback: false };
};

// Here we're fetching the necessary data for the blog post with the given
// id.
// Note that we're accepting a `params` param, which should be an object
// containing an `id` key. The value of `paths` in the object returned by
// getStaticPaths is an array of these objects containing a `params` key.
export const getStaticProps = async ({ params: { id } }) => {
  const postData = await getPostData(id);

  return { props: { postData } };
};

export default Post;
