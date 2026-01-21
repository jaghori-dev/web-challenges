import Header from "./components/Header";
import Nav from "./components/Navigation";
import Avatar from "./components/Avatar";
import Link from "./components/Link";
import Logo from "./components/Logo";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <Link link="#home">Home</Link>
          <Link link="#about">About</Link>
          <Link link="#impressum">Impressum</Link>
        </Nav>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
