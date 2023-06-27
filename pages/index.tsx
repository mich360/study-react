import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.css';

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.container}>
        <h1>Home Page</h1>
        <p>This is the home page content.</p>
        <p>Reactは、Facebookが開発したJavaScriptライブラリです。</p>

        <Link href="/about">About</Link>
      </div>
    </main>
  );
};

export default HomePage;
