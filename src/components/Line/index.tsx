import { Link } from 'react-router-dom';
import { Suppliers } from '../../services/api.types';

import styles from './styles.module.css';

interface Line {
    data: Suppliers;
    showEdit?: boolean;
}

function Line({ data, showEdit = false }: Line) {
    return (
        <ol className={styles.line} data-testid="line">
            <li>
                <span>Nome:</span> {data.name}
            </li>
            <li>
                <span>CNPJ:</span> {data.cnpj}
            </li>
            <li>
                <span>Telefone:</span> {data.phoneNumber}
            </li>
            <li>
                <span>Proprietário:</span> {data.ownerName}
            </li>
            {showEdit && (
                <li>
                    <Link to={`/supplier/${data.publicId}`}>Editar</Link>
                </li>
            )}
        </ol>
    );
}

export default Line;
