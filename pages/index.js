import Head from 'next/head'
import Layout, { siteTitle} from '../components/layout';
import utilStyle from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>About me</p>
        <p>
          (This is a sample website - youøll be building a site like this on {' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <sectionn className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={utilStyle.headingLg}>Blog</h2>
        <ul className={utilStyle.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyle.listItem} key={id}>
              {title}
              <br />
              {id} 
              <br />
              {date}
            </li>
          ))}
        </ul>
      </sectionn>
    </Layout>
  )
}