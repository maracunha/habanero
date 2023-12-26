import Header from './components/Header';
import Login from './pages/Login';
import Suppliers from './pages/Suppliers';
import SuppliersDetail from './pages/SuppliersDetail';

function App() {
    return (
        <main>
            <Header />

            <Login />
            <Suppliers />
            <SuppliersDetail />
        </main>
    );
}

export default App;
