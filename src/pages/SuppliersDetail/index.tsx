import { useState } from 'react';
import { useGetSuppliesByIdQuery } from '../../services/api';
import { Link, useParams } from 'react-router-dom';

import styles from './styles.module.css';

interface IFormInputText {
    label: string;
    value: string;
    disabled: boolean;
}
const FormInputText = ({ label, value, disabled }: IFormInputText) => {
    const name = label.replace(/ /g, '');
    return (
        <li>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} value={value} disabled={disabled} />
        </li>
    );
};

function SuppliersDetail() {
    const { id } = useParams();
    const { data, isLoading } = useGetSuppliesByIdQuery(id || '');
    console.log({ data, isLoading });

    const [disabled, setDisabled] = useState(true);

    if (isLoading || !data) {
        return 'loading...';
    }

    return (
        <section className={styles.wrapper}>
            <Link to="/">Back</Link>
            <button onClick={() => setDisabled(false)}>Edit</button>
            <form action="">
                <h2>Suppliers Detail</h2>
                <ol>
                    <FormInputText
                        label="Name"
                        value={data.name}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="CNPJ"
                        value={data.cnpj}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="Phone Number"
                        value={data.name}
                        disabled={disabled}
                    />
                </ol>
                <h3>Owner</h3>
                <ol>
                    <FormInputText
                        label="Name"
                        value={data.ownerName}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="email"
                        value={data.ownerEmail}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="Phone Number"
                        value={data.ownerPhoneNumber}
                        disabled={disabled}
                    />
                </ol>
                <h3>Address</h3>
                <ol>
                    <FormInputText
                        label="Address"
                        value={data.address}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="Number"
                        value={data.number}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="Complement"
                        value={data.complement}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="Neighborhood"
                        value={data.neighborhood}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="City"
                        value={data.city}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="State"
                        value={data.state}
                        disabled={disabled}
                    />
                    <FormInputText
                        label="Zip Code"
                        value={data.zipCode}
                        disabled={disabled}
                    />
                </ol>
            </form>
        </section>
    );
}

export default SuppliersDetail;
