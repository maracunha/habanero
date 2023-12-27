import { FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { useLoginMutation } from '../../services/api';
import { setCredentials } from '../../services/authSlice';

import styles from './styles.module.scss';

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    console.log({ isLoading });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const credetials = {
            grant_type: 'password',
            username: formData.get('username') ?? '',
            password: formData.get('password') ?? '',
            scope: 'web',
        };

        try {
            const { access_token } = await login(credetials).unwrap();
            dispatch(setCredentials({ token: access_token }));
            localStorage.setItem('token', access_token);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.image}>
                <h3>Login</h3>

                <span>
                    Elevando o Sabor, Definindo a Qualidade. O Ingrediente
                    Secreto para o Sucesso do Seu Negócio com Preços
                    Irresistíveis.
                </span>
            </div>

            <div className={styles.form}>
                <h3>Login</h3>
                <form id="login" onSubmit={handleSubmit}>
                    <fieldset>
                        <input
                            placeholder="Username"
                            name="username"
                            type="text"
                            tabIndex={1}
                            required
                            autoFocus
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            tabIndex={2}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <button
                            name="submit"
                            type="submit"
                            id="contact-submit"
                            tabIndex={3}
                            data-submit="...Sending"
                        >
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default Login;
