import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../src/components/common';

const MainLayout = () => {
    return (
        <div className="expressive-shell min-h-screen antialiased">
            <NavBar />
            <main className="pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;