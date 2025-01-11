import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col h-screen bg-pageBackground overflow-hidden">
            <header>
                <NavBar />
            </header>
            <main className="flex-grow flex justify-center items-center p-4 sm:p-8">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};