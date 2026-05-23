import { Outlet } from 'react-router-dom';
import { NavBar } from '../src/components/common';

const MainLayout = () => {
    return (
        <div className="expressive-shell min-h-screen antialiased grid-bg">
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;