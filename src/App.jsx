import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';
import Formulario from './pages/Formulario.jsx';
import Admins from './pages/Admins.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Formulario />} />
                    <Route path="/admin" element={<PrivateRoute element={<Admins />} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;