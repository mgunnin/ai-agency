import Head from 'next/head';
import React from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vertical Labs</title>
        <meta name="description" content="The AI Agency of the future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;