import { useRef } from "react";
import logo from "../logo.png"
import SearchResults from "./SearchResults";

export default function Header({handleSearchChange, display, resources}) {

  
  return (
    <header>
      <img src={logo} alt="undesign" />
      <h2 className="header-title">Undesign</h2>
      <p className="header-content">
        Collection of free design tools and resources for makers, developers and
        designers
      </p>
      <div className="searchDiv">
      <input type="text" placeholder="Search..." onChange={handleSearchChange} />
      <SearchResults display={display} resources={resources} />
      </div>
    </header>
  );
}
