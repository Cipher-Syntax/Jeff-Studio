import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import LandingPage from '../features/portfolio/pages/LandingPage';
import ProjectsPage from '../features/projects/pages/ProjectsPage';
import ProjectDetailPage from '../features/projects/pages/ProjectDetailPage';
import ContactPage from '../features/contact/pages/ContactPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:slug" element={<ProjectDetailPage />} />
                <Route path="contact" element={<ContactPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;