import { Outlet } from 'react-router';
import { Header } from './Header';

export function Layout() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}
