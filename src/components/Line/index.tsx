import { Link } from 'react-router-dom';
import { Suppliers } from '../../services/api.types';

import styles from './styles.module.css';

interface Line {
    data: Suppliers;
    showEdit?: boolean;
}

function Line({ data, showEdit = false }: Line) {
    return (
        <>
            <ol key={data.publicId} className={styles.line}>
                <li>
                    <span>Name:</span> {data.name}
                </li>
                <li>
                    <span>CNPJ:</span> {data.cnpj}
                </li>
                <li>
                    <span>Phone Number:</span> {data.phoneNumber}
                </li>
                <li>
                    <span>Owener Name:</span> {data.ownerName}
                </li>
                {showEdit && (
                    <li>
                        <Link to={`/supplier/${data.publicId}`}>Edit</Link>
                    </li>
                )}
            </ol>
            <hr />
        </>
    );
}

export default Line;
