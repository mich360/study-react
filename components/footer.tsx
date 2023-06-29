import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div>
       <footer>
        <h1>footer 編集</h1>
        {/* フッターのコンテンツ */}
        {" components/footer.tsxにフッターのコンテンツを作る"}
      </footer>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by {' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={50}
            height={12}
            priority
          />
        </a>
      </div>

     
    </div>
  );
};

export default Footer;




// // components/footer.tsx

// import React from 'react';

// const Footer: React.FC = () => {
//   return (
// <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>



//     <footer>
//       <h1>footer 編集</h1>
//       {" components/footer.tsxにフッターのコンテンツを作る"}
//       {/* フッターのコンテンツ */}
//     </footer>

    
//   );
// };

// export default Footer;
