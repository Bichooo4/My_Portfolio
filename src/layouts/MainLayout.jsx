import { Outlet } from 'react-router-dom';
import NavBar from '@/components/Layout/NavBar';
import Footer from '@/components/Layout/Footer';

export default function Layout() {
    return (
        <div className="flex flex-col h-screen bg-pageBackground overflow-hidden">
            <header>
                <NavBar />
            </header>
            <main className="flex-grow flex justify-center items-center border-y-4 border-pageBackground overflow-y-auto">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};