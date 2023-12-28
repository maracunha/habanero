import { useGetSuppliesQuery } from '../../services/api';
import Line from '../../components/Line';
import styles from './styles.module.css';

function Suppliers() {
    const { data, isLoading } = useGetSuppliesQuery('');

    if (isLoading || !data) {
        return 'loading...';
    }

    return (
        <section className={styles.wrapper}>
            <h2>Suppliers</h2>
            {data && data.map((supplier) => <Line data={supplier} showEdit />)}
        </section>
    );
}

export default Suppliers;
