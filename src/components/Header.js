import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../media/svgs/Logo.svg";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import SearchHistory from "./SearchHistory";
import { Link } from "react-router-dom";

function Header({ auth, length }) {
  const [search, setSearch] = useState("");

  const [history, setHistory] = useState([]);

  const [historyCard, setHistoryCard] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && search === "") {
      alert("write something then search");
      return;
    }
    if (e.key === "Enter") {
      setHistory([...history, search]);
      setSearch("");
    }
  };

  useEffect(() => {
    let data = localStorage.getItem("search-history");
    if (data) {
      setHistory(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("search-history", JSON.stringify(history));
  }, [history]);

  const handleFocus = () => {
    setHistoryCard(true);
  };

  return (
    <header className="header">
      <div className="right-sec">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="search-box">
          <input
            autoComplete="off"
            type="text"
            name="search"
            placeholder="جستجو در دیجی کالا..."
            value={search}
            onChange={handleChange}
            onKeyDown={handleKey}
            onFocus={handleFocus}
          />
          <FaSearch onClick={() => setHistoryCard(false)} />
          <SearchHistory
            history={history}
            setHistory={setHistory}
            historyCard={historyCard}
            setHistoryCard={setHistoryCard}
          />
        </div>
      </div>
      <div className="left-sec">
        <Link to={auth ? "/profile" : "/login"}>
          <button id={auth ? "no-border" : null}>
            {auth ? (
              <FaUser />
            ) : (
              <>
                <FaUser />
                ورود به حساب کاربری
              </>
            )}
          </button>
        </Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </header>
  );
}

export default Header;
