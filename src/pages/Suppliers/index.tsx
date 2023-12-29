import { useGetSuppliesQuery } from '../../services/api';
import Line from '../../components/Line';
import Loader from '../../components/Loader';

import styles from './styles.module.css';

function Suppliers() {
    const { data, isLoading } = useGetSuppliesQuery('');

    if (isLoading) {
        return <Loader />;
    }

    return (
        <section className={styles.wrapper}>
            <h2>Fornecedores</h2>
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
