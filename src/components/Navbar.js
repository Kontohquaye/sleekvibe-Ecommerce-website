import { Link, NavLink } from "react-router-dom";
import "../components/styles/navbar.css";
import { useRef, useState } from "react";

const Navbar = () => {
  const [bodyClicked, setBodyClicked] = useState(false);
  const navRef = useRef();
  const [showList, setShowList] = useState(false);
  const displayMenu = () => {
    navRef.current.classList.toggle("active");
  };

  const toggleList = () => {
    setBodyClicked(false);
    setShowList((prev) => !prev);
  };
  // hide list on body click.
  document.addEventListener("click", (e) => {
    e.target.className !== "cat-logo"
      ? setBodyClicked(true)
      : setBodyClicked(false);
  });

  return (
    <div className="navbar">
      <header>
        <Link to="/">
          <div className="logo">
            <span>
              <ion-icon name="storefront-outline"></ion-icon>
            </span>
            Sleekvibe
          </div>
        </Link>
        <div className="left">
          <div className="menu" onClick={displayMenu}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          {/* nav section */}

          <nav ref={navRef}>
            {/* categories */}
            <div className="categories" onClick={toggleList}>
              <div className="cat-logo">
                <span>
                  <ion-icon name="grid-outline"></ion-icon>
                </span>
                Category
              </div>
              <ul
                style={{
                  display: showList && !bodyClicked ? "block" : "none",
                }}
              >
                <Link to="womens-clothing">
                  <li>womens clothings</li>
                </Link>
                <Link to="mens-clothing">
                  <li>mens clothings</li>
                </Link>
                <Link to="kids-clothing">
                  <li>kids clothing</li>
                </Link>
                <Link to="shoes">
                  <li>shoes</li>
                </Link>
              </ul>
            </div>
            {/* accounst     */}
            <NavLink
              to="account"
              onClick={() => {
                setShowList(false);
              }}
            >
              <div className="account">
                <span>
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                Account
              </div>
            </NavLink>
            {/* cart */}
            <NavLink
              to="cart"
              onClick={() => {
                setShowList(false);
              }}
            >
              <span>
                <ion-icon name="cart-outline"></ion-icon>
              </span>
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
