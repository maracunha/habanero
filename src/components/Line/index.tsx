import { Link } from 'react-router-dom';
import { Suppliers } from '../../services/api.types';

import styles from './styles.module.css';

function Line({ ...data }: Suppliers) {
    return (
        <ol key={data.publicId} className={styles.line}>
            <li>{data.name}</li>
            <li>{data.cnpj}</li>
            <li>{data.phoneNumber}</li>
            <li>{data.ownerName}</li>
            <li>
                <Link to={`/supplier/${data.publicId}`}>Edit</Link>
            </li>
        </ol>
    );
}

export default Line;
