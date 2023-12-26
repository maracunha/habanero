import Switch from '../Switch';
import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h3>Habanero</h3>
                <Switch />
            </div>
        </header>
    );
}

export default Header;
