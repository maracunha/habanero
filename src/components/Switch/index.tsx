import { useTheme } from '../../hooks/useTheme';

function Switch() {
    const [theme, handleChange] = useTheme('light');

    return (
        <div className="container-switch">
            <span>Change Theme </span>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default Switch;
