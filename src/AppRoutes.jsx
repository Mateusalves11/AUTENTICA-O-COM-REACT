import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/auth';

import Home from './pages/Home';
import LoginPage from './pages/loginPage';

const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Loading...</div>
        }

        return authenticated ? children : <Navigate to="/login" />;
    }

    const Logged = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Loading...</div>
        }

        return !authenticated ? children : <Navigate to="/" />;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Private><Home /></Private>} />
                    <Route exact path="/login" element={<Logged><LoginPage /></Logged>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;