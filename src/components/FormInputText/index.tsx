import { useState } from 'react';

import styles from './styles.module.css';

interface IFormInputText {
    name: string;
    label: string;
    initialValue: string;
}
const FormInputText = ({ label, name, initialValue }: IFormInputText) => {
    const [value, setValue] = useState(initialValue);

    return (
        <li className={styles.line}>
            <label htmlFor={name}>{label}: </label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </li>
    );
};

export default FormInputText;
