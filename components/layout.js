import Head from 'next/head';
import Image from 'next/image';
import Navbar from './navbar';
import AboutMe from './about-me';
import Footer from './footer';
import styles from './layout.module.css';

export const siteTitle = 'Portfolio for CB'

export default function Layout({ children, home }) {
    return (
        <div>

            <Head>
                <link rel="icon" href="./favicon.ico" />
                <meta name="description" content="Portfolio and blog site for CB" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>

            <div className={styles.bgWrap}>
                <Image
                    alt="Glasgow landscape"
                    src="/images/pexels-anna-urlapova-3061345.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <Navbar />

            {home ? (<AboutMe />) : (<></>)};

            <main>{children}</main>

            <Footer />

        </div>
    );
}