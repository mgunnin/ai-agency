import Head from "next/head"
import React from "react"

export default function Meta() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Vertical Labs - The AI Agency of the Future</title>
      <meta charSet="utf-8" />
      <meta
        name="title"
        content="Vertical Labs - The AI Agency of the Future"
      />
      <meta
        name="description"
        content="Vertical Labs is an AI agency that specializes in building cutting-edge products and services."
      />
      <meta name="author" content="Vertical Labs" />
      <meta
        name="keywords"
        content="ai, agency, vertical labs, vertical, labs, ai agency, ai labs, ai labs, ai agency, ai, labs, labs, agency"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#E95420" />

      {/* Search Engine */}
      <meta name="image" content="images/logos/favicon.ico" />

      {/* Schema.org for Google */}
      <meta
        itemProp="name"
        content="Vertical Labs - The AI Agency of the Future"
      />
      <meta
        itemProp="description"
        content="Vertical Labs is an AI agency that specializes in building cutting-edge products and services."
      />
      <meta itemProp="image" content="images/logos/vertical_labs.png" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Vertical Labs - The AI Agency of the Future"
      />
      <meta
        name="twitter:description"
        content="Vertical Labs is an AI agency that specializes in building cutting-edge products and services."
      />
      <meta name="twitter:site" content="vertical_labs" />
      <meta name="twitter:creator" content="vertical_labs" />
      <meta name="twitter:image:src" content="images/logos/vertical_labs.png" />
      {/*Open Graph general (Facebook, Pinterest & Google+)*/}
      <meta
        name="og:title"
        content="Vertical Labs - The AI Agency of the Future"
      />
      <meta
        name="og:description"
        content="Vertical Labs is an AI agency that specializes in building cutting-edge products and services."
      />
      <meta name="og:image" content="images/logos/vertical_labs.png" />
      <meta name="og:url" content="https://github.com/mgunnin/ai-agency" />
      <meta
        name="og:site_name"
        content="Vertical Labs - The AI Agency of the Future"
      />
      <meta name="og:locale" content="en_IN" />
      <meta name="og:type" content="website" />
      <link rel="icon" href="images/logos/vertical_labs.png" />
      <link rel="apple-touch-icon" href="images/logos/vertical_labs.png" />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}
