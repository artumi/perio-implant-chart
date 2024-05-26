import "./Header.css";

export default function Header({ children }) {
  return (
    <header>
      <h1>PerioImplantChart</h1>
      {children}
    </header>
  );
}
