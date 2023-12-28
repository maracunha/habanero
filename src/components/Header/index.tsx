import { Link } from 'react-router-dom';
import Switch from '../Switch';

import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <h3>Habanero</h3>
                </Link>
                <Switch />
            </div>
        </header>
    );
}

export default Header;
