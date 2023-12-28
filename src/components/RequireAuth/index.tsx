import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/reduxHooks';

const RequireAuth = ({ children }: { children: ReactNode }) => {
    const location = useLocation();

    const { token } = useAppSelector((state) => state.auth);

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default RequireAuth;
