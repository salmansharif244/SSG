// import matter from 'gray-matter';
// import path from 'path';
// import fs from 'fs';
// import { getPostData } from '../lib/posts';

// // Server-side function to fetch post data
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
//   const fileContents = fs.readFileSync(filePath, 'utf8');

//   const { data, content } = matter(fileContents);

//   return {
//     props: {
//       postData: {
//         data,
//         content,
//       },
//     },
//   };
// }

// export default function Home({ postData }) {
//   const { data, content } = postData;

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.date}</p>
//       <div>{content}</div>
//     </div>
//   );
// }


// // export default async function Home() {
// //   const { data, contentHtml } = await getPostData();

// //   return (
// //     <div>
// //       <h1>{data.title}</h1>
// //       <p>{data.date}</p>
// //       <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
// //     </div>
// //   );
// // }


// import { getPostData } from '../lib/posts';

// export async function getStaticProps() {
//   const { data, contentHtml } = await getPostData();
//   return {
//     props: {
//       data,
//       contentHtml,
//     },
//   };
// }

// export default function Home({ data, contentHtml }) {
//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
//     </div>
//   );
// }


import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

// Server-side function to fetch post data
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the markdown file using gray-matter
  const { data, content } = matter(fileContents);

  return {
    props: {
      postData: {
        data,
        content,
      },
    },
  };
}

// Default export for the page component
export default function Home({ postData }) {
  const { data, content } = postData;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div>{content}</div>
    </div>
  );
}
