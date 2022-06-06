import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Date from '../components/date';
import styles from '../styles/index.module.css';
import utilityStyles from '../styles/utilities.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>

            <Head>
                <title>CB Portfolio</title>
            </Head>

            <section className={styles.posts}>
                <div className={utilityStyles.container}>
                    <div className={utilityStyles.card}>
                        <h1>Posts</h1>
                        <ul>
                            {allPostsData.map(({ id, date, title }) => (
                                <li key={id}>
                                    <Link href={`/posts/${id}`}>
                                        <a>{title}</a>
                                    </Link>
                                    <br />
                                    <small>
                                        <Date dateString={date} />
                                    </small>                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
