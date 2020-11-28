import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, author, keywords } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Simple Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Simple Portfolio'} />
        <meta name="author" content={author || 'Unknown'} />
        <meta name="keywords" content={keywords || 'Portfolio, portfolio reactjs, gatsbyjs'} />
      </Helmet>
      <App />
    </>
  );
};
