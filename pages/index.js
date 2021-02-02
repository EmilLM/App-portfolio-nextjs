import styles from '../styles/home.module.scss'
import Link from 'next/link';
const  Home = () => {
    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.choose}>Choose </span> 
                <span className={styles.your}>your </span> 
                <span className={styles.style}>style </span> 
            </h1>
            <div className={styles.accordion}>
                <div className={`${styles.skewed} ${styles.section}`}>
                    <a href="#" className={styles.type}>Skewed</a>
                </div>
                <div className={`${styles.waves} ${styles.section}`}>
                    <a href="/waves" className={styles.type}>Waves</a>
                </div>
                <div className={`${styles.neumorphism} ${styles.section}`}>
                    <a href="/neumorphism" className={styles.type}>Neumorphism</a>
                </div>
            </div>
        </div>
    );
}
 
export default Home ;