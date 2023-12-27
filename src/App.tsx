import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Suppliers from './pages/Suppliers';
import RequireAuth from './components/RequireAuth';

function App() {
    return (
        <main>
            <Header />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="*"
                    element={
                        <RequireAuth>
                            <Suppliers />
                        </RequireAuth>
                    }
                />
            </Routes>
        </main>
    );
}

export default App;
