import { useState } from 'react';
import { Button } from './ui/Button';

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <Button 
      variant="primary" 
      onClick={() => setLiked(!liked)}
      aria-label="Like (2 likes)"
    >
      {liked ? 'Liked' : 'Like'}
    </Button>
  );
}