import { useGetSuppliesQuery } from '../../services/api';
import Line from '../../components/Line';
import styles from './styles.module.css';

function Suppliers() {
    const { data, isLoading } = useGetSuppliesQuery('');

    console.log('suppliess', data);

    if (isLoading) {
        return 'loading...';
    }

    return (
        <section className={styles.wrapper}>
            <h2>Suppliers</h2>
            <div className={styles.cards}>
                {data &&
                    data.map((supplier) => (
                        <Line
                            key={supplier.publicId}
                            data={supplier}
                            showEdit
                        />
                    ))}
            </div>
        </section>
    );
}

export default Suppliers;
