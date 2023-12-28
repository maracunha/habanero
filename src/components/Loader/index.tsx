import styles from './styles.module.css';

function Loader() {
    return (
        <div className={styles.state}>
            <div className={styles.loading}></div>
        </div>
    );
}

export default Loader;
