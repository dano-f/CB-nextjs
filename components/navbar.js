import Link from 'next/link';
import Container from './container';
import styles from './navbar.module.css';
import utilityStyles from '../styles/utilities.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Container>
                <div className={`${utilityStyles.flex} ${utilityStyles.hide_overflow}`}>
                    <nav>
                        <ul>
                            <li> <Link href='/'><a>Home</a></Link> </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    );
}