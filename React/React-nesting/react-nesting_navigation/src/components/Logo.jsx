import Image from "./Image";
import logo from "../img/logo.jpg";
import Link from "./Link";

export default function Logo() {
  return (
    <Link link="#">
      <Image src={logo} alt="logo"></Image>
    </Link>
  );
}
