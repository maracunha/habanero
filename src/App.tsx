import { useAppDispatch } from './hooks/reduxHooks';
import { setCredentials } from './services/authSlice';

import Header from './components/Header';
import MainRouter from './MainRouter';

function App() {
    const token = localStorage.getItem('token');
    const dispatch = useAppDispatch();

    if (token) {
        dispatch(setCredentials({ token }));
    }
    return (
        <main>
            <Header />
            <MainRouter />
        </main>
    );
}

export default App;
