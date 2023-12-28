import { Link, useParams } from 'react-router-dom';
import { FormEvent } from 'react';

import {
    useGetSuppliesByIdQuery,
    useUpdateSupplierMutation,
} from '../../services/api';
import FormInputText from '../../components/FormInputText';

import styles from './styles.module.css';

function SuppliersDetail() {
    const { id } = useParams();
    const { data, isLoading } = useGetSuppliesByIdQuery(id || '');
    const [update, { isLoading: isLoadingUpdate }] =
        useUpdateSupplierMutation();
    console.log({ isLoadingUpdate });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data = {
            publicId: id,
            name: formData.get('name'),
            cnpj: formData.get('cnpj'),
            phoneNumber: formData.get('phoneNumber'),
            zipCode: formData.get('zipCode'),
            address: formData.get('address'),
            number: formData.get('number'),
            complement: formData.get('complement'),
            neighborhood: formData.get('neighborhood'),
            city: formData.get('city'),
            state: formData.get('state'),
            ownerName: formData.get('ownerName'),
            ownerEmail: formData.get('ownerEmail'),
            ownerPhoneNumber: formData.get('ownerPhoneNumber'),
        };
        console.log(data);
        try {
            const resp = await update(data).unwrap();
            console.log({ resp });
            // dispatch(setCredentials({ token: access_token }));
            //navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading || !data) {
        return 'loading...';
    }

    return (
        <section className={styles.wrapper}>
            <form id="supplier" onSubmit={handleSubmit}>
                <h2>Suppliers Detail</h2>
                <div className={styles.header}>
                    <Link to="/">Back</Link>
                    <button type="submit">Submit</button>
                </div>

                <fieldset>
                    <FormInputText
                        label="Name"
                        name="name"
                        initialValue={data.name}
                    />
                    <FormInputText
                        label="CNPJ"
                        name="cnpj"
                        initialValue={data.cnpj}
                    />
                    <FormInputText
                        label="Phone Number"
                        name="phoneNumber"
                        initialValue={data.phoneNumber}
                    />
                </fieldset>
                <h3>Owner</h3>
                <ol>
                    <FormInputText
                        label="Name"
                        name="ownerName"
                        initialValue={data.ownerName}
                    />
                    <FormInputText
                        label="email"
                        name="ownerEmail"
                        initialValue={data.ownerEmail}
                    />
                    <FormInputText
                        label="Phone Number"
                        name="ownerPhoneNumber"
                        initialValue={data.ownerPhoneNumber}
                    />
                </ol>
                <h3>Address</h3>
                <ol>
                    <FormInputText
                        label="Address"
                        name="address"
                        initialValue={data.address}
                    />
                    <FormInputText
                        label="Number"
                        name="number"
                        initialValue={data.number}
                    />
                    <FormInputText
                        label="Complement"
                        name="complement"
                        initialValue={data.complement}
                    />
                    <FormInputText
                        label="Neighborhood"
                        name="neighborhood"
                        initialValue={data.neighborhood}
                    />
                    <FormInputText
                        label="City"
                        name="city"
                        initialValue={data.city}
                    />
                    <FormInputText
                        label="State"
                        name="state"
                        initialValue={data.state}
                    />
                    <FormInputText
                        label="Zip Code"
                        name="zipCode"
                        initialValue={data.zipCode}
                    />
                </ol>
            </form>
        </section>
    );
}

export default SuppliersDetail;
