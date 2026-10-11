import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app-container">
      <Header title="My Portfolio" />
      <main>
        <Outlet />
      </main>
      <Footer text="© 2026 Miras" />
    </div>
  );
}