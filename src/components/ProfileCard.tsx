import { useState } from 'react';
import SkillBadge from './SkillBadge';
import type { Skill } from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  skills: Skill[];
};

export default function ProfileCard({ name, role, avatarUrl, skills }: ProfileCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="profile-card">
      {avatarUrl && (
        <img 
          src={avatarUrl} 
          alt={name} 
          className="avatar" 
          width={150} 
          height={150} 
        />
      )}
      <h2>{name}</h2>
      <p className="role">{role}</p>
      
      <div className="likes-section">
        <button onClick={() => setLikes(likes + 1)}>
          ❤️ Likes: {likes}
        </button>
      </div>

      <div className="skills-section">
        <h3>Skills:</h3>
        {skills.length === 0 ? (
          <p>No skills available.</p>
        ) : (
          <div className="skills-list">
            {skills.map(skill => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}