import { useGetSuppliesQuery } from '../../services/api';
import Line from '../../components/Line';
// import styles from './styles.module.css';

function Suppliers() {
    const { data, isLoading } = useGetSuppliesQuery();
    const header = {
        name: 'Nome',
        cnpj: 'CNPJ',
        phoneNumber: 'Phone Number',
        ownerName: 'Owner',
    };

    console.log(data, isLoading);
    if (isLoading || !data) {
        return 'loading...';
    }

    return (
        <>
            <h2>Suppliers</h2>
            {data && data.map((supplier) => Line(supplier))}
        </>
    );
}

export default Suppliers;
