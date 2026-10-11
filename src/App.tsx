import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import myPhoto from './assets/Myphoto.png';  

function App() {
  const mySkills = [
    { id: 1, label: 'PC Assembly & Setup' },
    { id: 2, label: 'Laravel Backend' },
    { id: 3, label: 'Python Developer' },
  ];

  return (
    <div className="app-container">
      <Header title="My Portfolio" />
      <main>
        <ProfileCard 
          name="Miras" 
          role="Developer & IT Enthusiast"
          avatarUrl={myPhoto}  
          skills={mySkills}
        />
      </main>
      <Footer text="© 2026 Miras" />
    </div>
  );
}

export default App;