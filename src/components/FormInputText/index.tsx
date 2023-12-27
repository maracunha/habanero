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

export default FormInputText;
