import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function NotFound() {
    return (
        <div className={styles.error}>
            <h3>Oops! There's nothing here</h3>
            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
    );
}

export default NotFound;
