import SkillBadge from '../components/SkillBadge';

export default function SkillsPage() {
  const skills = [
    { id: 1, label: 'PC Assembly & Setup' },
    { id: 2, label: 'Laravel Backend' },
    { id: 3, label: 'Python Developer' },
  ];

  return (
    <div className="skills-page">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}