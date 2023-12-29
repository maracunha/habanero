import { FormEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';

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
        try {
            const resp = await update(data).unwrap();
            console.log({ resp });
            // dispatch(setCredentials({ token: access_token }));
            //navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading || !data || isLoadingUpdate) {
        return <Loader />;
    }

    return (
        <section className={styles.wrapper}>
            <form id="supplier" onSubmit={handleSubmit}>
                <h2>Editar detalhes dos fornecedor</h2>
                <div className={styles.header}>
                    <Link to="/">Voltar</Link>
                    <button type="submit">Enviar</button>
                </div>

                <div className={styles.form}>
                    <fieldset>
                        <legend>
                            <h3>Principal</h3>
                        </legend>
                        <FormInputText
                            label="Nome"
                            name="name"
                            initialValue={data.name}
                        />
                        <FormInputText
                            label="CNPJ"
                            name="cnpj"
                            initialValue={data.cnpj}
                        />
                        <FormInputText
                            label="Telefone"
                            name="phoneNumber"
                            initialValue={data.phoneNumber}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            <h3>Proprietário</h3>
                        </legend>
                        <FormInputText
                            label="Nome"
                            name="ownerName"
                            initialValue={data.ownerName}
                        />
                        <FormInputText
                            label="Email"
                            name="ownerEmail"
                            initialValue={data.ownerEmail}
                        />
                        <FormInputText
                            label="Telefone"
                            name="ownerPhoneNumber"
                            initialValue={data.ownerPhoneNumber}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            <h3>Endereço</h3>
                        </legend>
                        <FormInputText
                            label="Endereço"
                            name="address"
                            initialValue={data.address}
                        />
                        <FormInputText
                            label="Número"
                            name="number"
                            initialValue={data.number}
                        />
                        <FormInputText
                            label="Complemento"
                            name="complement"
                            initialValue={data.complement}
                        />
                        <FormInputText
                            label="Bairro"
                            name="neighborhood"
                            initialValue={data.neighborhood}
                        />
                        <FormInputText
                            label="Cidade"
                            name="city"
                            initialValue={data.city}
                        />
                        <FormInputText
                            label="Estado"
                            name="state"
                            initialValue={data.state}
                        />
                        <FormInputText
                            label="Zip Code"
                            name="zipCode"
                            initialValue={data.zipCode}
                        />
                    </fieldset>
                </div>
            </form>
        </section>
    );
}

export default SuppliersDetail;
