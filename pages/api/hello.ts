import { NextApiRequest, NextApiResponse } from 'next';

// API ROUTES
// API Routes let you create an API endpoint inside a Next.js app.

// Below is an example of how to do so:

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' });
};

// API ROUTES TIPS

// You should NOT fetch an API Route from `getStaticProps` or
// `getStaticPaths`. Instead, write your server-side code directly inside
// `getStaticProps` and `getStaticPaths`.

// A good use case for API Routes is handling form input.
// You can create a form on your page and have it send a POST request to
// your API Route. You can then write code to directly save it to your DB.
// It's safe to do so because the API Route code will not be a part of your
// client bundle, just like `getStaticProps` and `getStaticPaths`!

// See the example below:
export const saveEmailData = (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body.email;

  // Then save email to your database, etc...
};

// DYNAMIC API ROUTES
// API Routes can be dynamic, just like regular pages.
// See the Dynamic API Routes documentation for more.
