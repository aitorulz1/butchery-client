import { Input } from "semantic-ui-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="top-bar">
      <Logo />
      <div className="searcher-container">
        <Search />
      </div>

      <h1>Topbar...</h1>
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
