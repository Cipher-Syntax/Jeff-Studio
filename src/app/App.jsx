import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { ThemeProvider } from '../context/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;