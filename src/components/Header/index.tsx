import Switch from '../Switch';
import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h3>Habanero</h3>
            <Switch />
        </header>
    );
}

export default Header;
