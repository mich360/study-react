//import React from 'react';
import Image from 'next/image';
import IndexPage from './index';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import Footer from '../components/footer';
import Links from '../components/links';
import Header from '../components/header';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Header />

     <h1>仰せの如くapp/page.tsxをstudy-reactにて編集を始めます</h1>
      　　　　　  {/*以下追加編集*/}
      <a
          href="./about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-1xl font-lighter`}>
          About Page{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Aboutページ編集して&nbsp;アニメーション&emsp;コンポーネントの追加ご覧ください
          </p>
        </a>
      {/* 既存のコンテンツ */}
      {/* ... */}
      {/* IndexPageコンポーネントの追加 */}
      {/* ... */}
      <IndexPage />
      <Links />
      <Footer />
    </main>
    ) 
  }


 




// // app/page.tsx
// import React, { ReactNode } from 'react';
// import Footer from '../components/footer';
// // ...

// type PageProps = {
//   children: ReactNode;
// };

// function Page({ children }: PageProps) {
//   return (
//     <div>
//       {/* <Header /> */}
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// }

// export default Page;




