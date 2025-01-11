import Home from '@/pages/Home';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Contacts from '@/pages/Contacts';
import NotFound from '@/pages/NotFound';
import Projects from '@/pages/Projects';
import Layout from '@/layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};