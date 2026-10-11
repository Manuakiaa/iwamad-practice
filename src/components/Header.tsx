import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" width={32} height={32} />
      <span>Miras</span>
    </header>
  );
}