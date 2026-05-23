import { BrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import AppRoutes from './Routes';
import { ThemeProvider } from '../context/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <Providers>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </Providers>
        </ThemeProvider>
    );
};

export default App;