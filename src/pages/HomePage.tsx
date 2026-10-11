import ProfileCard from '../components/ProfileCard';

export default function HomePage() {
  const mySkills = [
    { id: 1, label: 'PC Assembly & Setup' },
    { id: 2, label: 'Laravel Backend' },
    { id: 3, label: 'Python Developer' },
  ];

  return (
    <HomePageWrapper>
      <ProfileCard 
        name="Miras" 
        role="Developer & IT Enthusiast"
        avatarUrl={`${import.meta.env.BASE_URL}Myphoto.png`}
        skills={mySkills}
      />
    </HomePageWrapper>
  );
}

function HomePageWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}