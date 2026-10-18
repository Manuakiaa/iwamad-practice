import { NavLink } from 'react-router';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" width={32} height={32} />
      <span>Miras</span>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
}
