import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="header">
      <h1>{title}</h1>
      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
          Skills
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </nav>
      <div className="header-likes">❤️ {likes}</div>
    </header>
  );
}