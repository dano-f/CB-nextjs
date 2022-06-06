import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilityStyles from '../styles/utilities.module.css';

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

            <div className={styles.navbar}>
                <div className={`${utilityStyles.container}`}>
                    <div className={`${utilityStyles.flex} ${utilityStyles.hide_overflow}`}>
                        <nav>
                            <ul>
                                <li> <Link href='/'><a>Home</a></Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {home ? (
                <section className={styles.about_me}>
                    <div className={utilityStyles.container}>
                        <div className={`${utilityStyles.card}`}>
                            <div className={`${utilityStyles.grid} ${utilityStyles.last_child_to_first}`}>
                                <div>
                                    <h1>Lorem ipsum dolor sit amet.</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cumque! Sunt nam veniam vero.
                                        Inventore, praesentium? Repellendus maxime praesentium est.
                                    </p>
                                    <p>
                                        <a href="/"><i class="fa-regular fa-envelope fa-2x"></i></a>
                                        <a href="/"><i class="fab fa-twitter fa-2x"></i></a>
                                        <a href="/"><i class="fab fa-facebook fa-2x"></i></a>
                                        <a href="/"><i class="fab fa-instagram fa-2x"></i></a>
                                    </p>
                                </div>

                                <div className={utilityStyles.justify_self}>
                                    <Image
                                        priority
                                        src="/images/pexels-atc-comm-photo-952264.jpg"
                                        layout='fixed'
                                        width={300}
                                        height={225}
                                        alt="A camera dangling on a strap"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <></>
            )};

            <main>{children}</main>

            <div className={styles.footer}>
                <div className={`${utilityStyles.container} ${utilityStyles.flex} ${utilityStyles.hide_overflow}`}>
                    <p>Site by DF</p>
                </div>
            </div>

        </div>
    );
}