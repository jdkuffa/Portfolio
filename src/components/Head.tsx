import React from 'react';
import { Helmet } from 'react-helmet';

const Head: React.FC = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gigi Kuffa Portfolio</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="media-queries.css" />
  </Helmet>
);

export default Head;