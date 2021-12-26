/* eslint-disable @next/next/no-sync-scripts */
import * as React from "react";
import Head from 'next/head';
import Link from 'next/link'

import AnimateCC from "react-adobe-animate";

const Home = () => (
  <>
    <Head>
      <script src="https://code.createjs.com/1.0.0/createjs.min.js" type="text/javascript"></script>
      <script src="/lishtml5.js" type="text/javascript"></script>
    </Head>
    <div>
      <Link href="/test">
       <a>Click here</a>
      </Link>
      <div style={{ width: "400px" }}>
        <AnimateCC
          animationName="lishtml5"
        />
      </div>
    </div>
  </>
);

export default Home;
