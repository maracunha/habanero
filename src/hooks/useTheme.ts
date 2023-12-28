import { useEffect, useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type Theme = 'dark' | 'light';

type UseTheme = [string, (e: ChangeEvent) => void];

export const useTheme = (initialTheme: Theme): UseTheme => {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    const handleChange = (e: ChangeEvent) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, handleChange];
};
