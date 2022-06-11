import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Container from '../components/container';
import Card from '../components/card';
import Date from '../components/date';
import styles from '../styles/index.module.css';

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
                <Container>
                    <Card>
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
                    </Card>
                </Container>
            </section>

        </Layout>
    );
}
