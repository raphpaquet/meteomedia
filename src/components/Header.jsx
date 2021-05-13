import '../App.scss';
import { useState } from 'react';
import Search from './Search';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [search, setSearch] = useState(false);


  return (
    <div className="header">
      <h1 class="title">Meteomedia</h1>
      <button className="search-btn" onClick={search ? () => setSearch(false) : () => setSearch(true)}><FontAwesomeIcon icon={faSearch} /></button>
    </div>
  )
}
