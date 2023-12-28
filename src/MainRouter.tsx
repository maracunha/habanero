import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import NotFound from './pages/NotFoundPage';
import RequireAuth from './components/RequireAuth';
import Suppliers from './pages/Suppliers';
import SuppliersDetail from './pages/SuppliersDetail';

function MainRouter() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="*"
                element={
                    <RequireAuth>
                        <Routes>
                            <Route path="/" element={<Suppliers />} />
                            <Route
                                path="/supplier/:id"
                                element={<SuppliersDetail />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </RequireAuth>
                }
            />
        </Routes>
    );
}

export default MainRouter;
