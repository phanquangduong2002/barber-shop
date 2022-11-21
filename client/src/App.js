import { Routes, Route } from 'react-router-dom';

import { CustomCursor } from './components/home';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="w-full relative bg-bgColor">
            <CustomCursor />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route
                    path="*"
                    element={
                        <div className="w-screen h-screen text-textColor p-10 bg-bgColor">
                            404 Not Found
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
