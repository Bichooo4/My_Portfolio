import { Outlet } from 'react-router-dom';
import NavBar from '@/components/Layout/NavBar';
import Footer from '@/components/Layout/Footer';

export default function Layout() {
    return (
        <div className="flex flex-col h-screen bg-pageBackground overflow-hidden">
            {/* Fixed NavBar at the top */}
            <header className="fixed top-0 left-0 right-0 z-10">
                <NavBar />
            </header>

            {/* Main content area with scrollable content */}
            <main className="flex-grow mt-[50px] mb-[50px] overflow-y-auto custom-scrollbar">
                <Outlet />
            </main>

            {/* Fixed Footer at the bottom */}
            <footer className="fixed bottom-0 left-0 right-0 z-10">
                <Footer />
            </footer>
        </div>
    );
};