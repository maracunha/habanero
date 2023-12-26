import { useTheme } from '../../hooks/useTheme';
import styles from './styles.module.css';

function Switch() {
    const [theme, handleChange] = useTheme('light');

    return (
        <div className={styles.wrapper}>
            <span>{theme} mode</span>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    checked={theme === 'dark'}
                />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
}

export default Switch;
