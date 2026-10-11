import { Tag } from './ui/Tag';

type SkillBadgeProps = {
  name: string;
};

export function SkillBadge({ name }: SkillBadgeProps) {
  return <Tag label={name} />;
}