import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikeButton } from './LikeButton';

it('changes the text on click', async () => {
  render(<LikeButton />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Like');
  await userEvent.click(button);
  expect(button).toHaveTextContent('Liked');
});
