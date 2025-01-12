import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';

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