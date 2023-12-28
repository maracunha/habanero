import { Link } from 'react-router-dom';
import { Suppliers } from '../../services/api.types';

import styles from './styles.module.css';

interface Line {
    data: Suppliers;
    showEdit?: boolean;
}

function Line({ data, showEdit = false }: Line) {
    return (
        <ol key={data.publicId} className={styles.line}>
            <li>{data.name}</li>
            <li>{data.cnpj}</li>
            <li>{data.phoneNumber}</li>
            <li>{data.ownerName}</li>
            {showEdit && (
                <li>
                    <Link to={`/supplier/${data.publicId}`}>Edit</Link>
                </li>
            )}
        </ol>
    );
}

export default Line;
