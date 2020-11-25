// DYNAMIC ROUTING
// Pages wrapped in [] are dynamic routes in Next.js.

import Head from 'next/head';

import Layout from '../../components/layout';
import Date from '../../components/date';

import { getAllPostIds, getPostData } from '../../lib/posts';

import utilStyles from '../../styles/utils.module.css';

const Post = ({ postData: { title, date, contentHtml } }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  </Layout>
);

// getStaticPaths returns a list of possible values for the `id` in this
// filename.
export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return { paths, fallback: false };
  // The array of possible values for `id` must be the value of the `paths`
  // key in the returned object, which is exactly what getAllPostIds()
  // returns.

  // If fallback is false, then any paths not returned by getStaticPaths
  // will result in a 404 page.
  // You can create a custom 404 page by creating a `pages/404.js` file.
  // See the error pages documentation to learn more.

  // If fallback is true, then the behavior of getStaticProps changes:
  // 1. Paths returned from getStaticPaths will be rendered to HTML at build
  //    time.
  // 2. The paths not generated at build time will NOT result in a 404 page
  //    and instead, a "fallback" version of the page will be served on the
  //    first request to such a path.
  // 3. In the background, Next.js will statically generate the requested
  //    path. Subsequent requests to that same path will serve the generated
  //    page, just like the other pages pre-rendered at build time.

  // See the documentation on fallback for more.
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
