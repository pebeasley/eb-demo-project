import React from "react";
import Head from "next/head";
import Header from "../components/header/Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Puppy Finder</title>
      </Head>
      <Header />
      {children}
    </>
  );
}

export default Layout;
