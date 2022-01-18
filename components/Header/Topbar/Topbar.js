import { Input } from "semantic-ui-react";
import Link from "next/link";
import Menuweb from "../Menu";

export default function Topbar() {
  return (
    <div className="top-bar">
      <Logo />
      <div className="searcher-container">
        <Search />
      </div>

      <Menuweb />
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <a>
        {/* <img src="/logo.png" alt="Carn&Ceros" /> */}
        LOGO
      </a>
    </Link>
  );
}

function Search() {
  return <Input icon={{ name: "search" }} />;
}
