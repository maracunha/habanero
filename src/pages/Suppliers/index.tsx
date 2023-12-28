import { useGetSuppliesQuery } from '../../services/api';
import Line from '../../components/Line';
import styles from './styles.module.css';

const HEADER = {
    publicId: '0',
    name: 'Name',
    cnpj: 'CNPJ',
    phoneNumber: 'Phone Number',
    ownerName: 'Owner Name',
};

function Suppliers() {
    const { data, isLoading } = useGetSuppliesQuery('');

    if (isLoading || !data) {
        return 'loading...';
    }

    return (
        <section className={styles.wrapper}>
            <h2>Suppliers</h2>
            <Line data={HEADER} />
            {data && data.map((supplier) => <Line data={supplier} showEdit />)}
        </section>
    );
}

export default Suppliers;
