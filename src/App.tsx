import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <ProfileCard />
      </main>
    </div>
  );
}