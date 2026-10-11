import { Card } from './ui/Card';
import { LikeButton } from './LikeButton';

export function ProfileCard() {
  return (
    <Card>
      <h2>Miras Anuarbek</h2>
      <p>KBTU student.</p>
      <LikeButton />
    </Card>
  );
}