import { Link } from 'react-router-dom';

import styles from './styles.module.css';

function NotFound() {
    return (
        <div className={styles.error}>
            <h3>Oops! There's nothing here</h3>
            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}

export default NotFound;
