import Head from 'next/head';
import Link from 'next/link';

// LINKS
// In the h1, a Link component is used to wrap an a tag to allow for
// client-side navigation within the app.

// The page transition happens using JS, which is faster than the default
// navigation done by the browser.
// With client-side navigation, the broswer no longer has to load full
// pages, and thus perform complete refreshes, in between page transitions.

// Furthermore, Next.js does code splitting automatically, meaning each
// page only loads what's necessary for that page. When the homepage is
// rendered, the code for other pages is not served initially, which lets
// the homepage load quickly even if hundreds of pages are added.

// In a production build also, whenever Link components appear in the
// browser viewport, Next.js automatically prefetches the code for the
// linked page in the background, making page transitions near-instant.

// This code splitting also means that pages become isolated. If one page
// throws an error, the rest of the app should still work.

// Notes
// If you need to link to an external page, just use a regular <a> tag.
// If you need to add attributes like className, add them to the <a> tag,
// not the Link tag. The Link should only have an href attribute.

// For more, refer to the routing section of the Next.js docs.

// STATIC ASSETS
// Static files can be served under the top level public directory.

// Files inside of this directory can be referenced from the root of the
// app similarly to pages. Note how the logo image in the footer is referred.

// If you wanted to add a new asset /images/me.jpg, the file path would be
// public/images/me.jpg.

// For more, refer to the Static File Serving section of the Next.js docs.

// METADATA
// Head is a React component built into Next.js that allows you to modify
// the <head> metadata of a page. It's imported from the next/head module.

// For more, see the API reference for next/head.
// If you want to customize the <html> tag, you can do so by creating a
// pages/_document.js file. Learn more in the custom Document
// documentation.

const Home = () => (
  <div className='container'>
    <Head>
      <title>Create Next App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h1 className='title'>
        Read{' '}
        <Link href='/posts/first-post'>
          <a>this page!</a>
        </Link>
      </h1>

      <p className='description'>
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className='grid'>
        <a href='https://nextjs.org/docs' className='card'>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href='https://nextjs.org/learn' className='card'>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href='https://github.com/vercel/next.js/tree/master/examples'
          className='card'
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className='card'
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>

    <footer>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by <img src='/vercel.svg' alt='Vercel Logo' className='logo' />
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      .logo {
        height: 1em;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
