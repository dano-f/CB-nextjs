import styles from './footer.module.css';
import utilityStyles from '../styles/utilities.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={`${utilityStyles.container} ${utilityStyles.flex} ${utilityStyles.hide_overflow}`}>
                <p>Site by DF</p>
            </div>
        </div>
    )
}