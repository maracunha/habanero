import { Link } from 'react-router-dom';
import Switch from '../Switch';

import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <h1 className="h3">Habanero</h1>
                </Link>
                <Switch />
            </div>
        </header>
    );
}

export default Header;
