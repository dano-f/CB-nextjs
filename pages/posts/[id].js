import Head from 'next/head';
import Layout from '../../components/layout';
import Container from '../../components/container';
import Card from '../../components/card';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <Layout home={false}>

            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <Container>
                    <Card>
                        <h1>{postData.title}</h1>
                        <Date dateString={postData.date} />
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    </Card>
                </Container>
            </article>

        </Layout>
    );
}
