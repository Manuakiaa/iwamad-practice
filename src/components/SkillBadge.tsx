export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return <span className="skill-badge">{skill.label}</span>;
}