import { Routes, Route } from 'react-router-dom';

import { CustomCursor, Header } from './components';

import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import CustomerPage from './pages/CustomerPage';

function App() {
    return (
        <div className="w-full h-[10000px] relative bg-bgColor">
            <CustomCursor />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/customer" element={<CustomerPage />} />
            </Routes>
        </div>
    );
}

export default App;
