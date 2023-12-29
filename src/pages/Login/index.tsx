import { FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { useLoginMutation } from '../../services/api';
import { setCredentials } from '../../services/authSlice';

import styles from './styles.module.scss';
import logo from '../../assets/habanero.svg';

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [login] = useLoginMutation();

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
                <h3>Elevando o Sabor, Definindo a Qualidade</h3>
                <div>
                    <figure>
                        <img src={logo} alt="Habanero truck" />
                    </figure>
                    <span>
                        O Ingrediente Secreto para o Sucesso do Seu Negócio com
                        Preços Irresistíveis.
                    </span>
                </div>
            </div>

            <div className={styles.form}>
                <h2>Login</h2>
                <form id="login" onSubmit={handleSubmit}>
                    <fieldset>
                        <input
                            placeholder="usuário"
                            name="username"
                            type="text"
                            required
                            autoFocus
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            placeholder="senha"
                            name="password"
                            type="password"
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="submit">
                            Entrar
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default Login;
