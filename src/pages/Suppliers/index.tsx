import { useNavigate } from 'react-router-dom';
import { useGetSuppliesQuery } from '../../services/api';
import styles from './styles.module.css';

interface Supplier {
    name: string;
    cnpj: string;
    phoneNumber: string;
    ownerName: string;
    publicId: string;
}

function Line(data: Supplier) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/suppliers/${data.publicId}`);
    };

    return (
        <ol key={data.publicId}>
            <li>{data.name}</li>
            <li>{data.cnpj}</li>
            <li>{data.phoneNumber}</li>
            <li>{data.ownerName}</li>
            <li>
                <button onClick={handleClick}>Edit</button>
            </li>
        </ol>
    );
}

function Suppliers() {
    const { data, isLoading } = useGetSuppliesQuery();
    const header = {
        name: 'Nome',
        cnpj: 'CNPJ',
        phoneNumber: 'Phone Number',
        ownerName: 'Owner',
    };

    console.log(data, isLoading);
    if (isLoading) {
        return 'loading...';
    }

    const suppliers = [header, ...data];

    return (
        <>
            <h2>Suppliers</h2>
            {data.map((supplier) => Line(supplier))}
        </>
    );
}

export default Suppliers;
