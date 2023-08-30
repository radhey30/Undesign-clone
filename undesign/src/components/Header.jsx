import logo from "../logo.png"

export default function Header() {
  return (
    <header>
      <img src={logo} alt="undesign" />
      <h2 className="header-title">Undesign</h2>
      <p className="header-content">
        Collection of free design tools and resources for makers, developers and
        designers
      </p>
      <input type="text" placeholder="Search..." />
    </header>
  );
}
