import Image from 'next/image';
import Link from 'next/link';
import Container from './container';
import Card from './card';
import styles from './about-me.module.css';
import utilityStyles from '../styles/utilities.module.css';

export default function AboutMe({ children }) {
    return (
        <section className={styles.about_me}>
            <Container>
                <Card>
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
                </Card>
            </Container>
        </section>
    );
}