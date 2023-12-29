import { Theme, useTheme } from '../../hooks/useTheme';
import styles from './styles.module.css';

function Switch() {
    const localTheme = localStorage.getItem('theme') ?? 'light';
    const [theme, handleChange] = useTheme(localTheme as Theme);

    return (
        <div className={styles.wrapper}>
            <span data-testid="theme">{theme} mode</span>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    aria-label="theme"
                    onChange={handleChange}
                    checked={theme === 'dark'}
                />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
}

export default Switch;
