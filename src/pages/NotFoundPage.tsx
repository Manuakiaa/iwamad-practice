import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}