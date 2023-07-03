import "./Navbar.scss";
import { MdSpaceDashboard } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="./logo-transparent.png" alt="logo" />
        <h4>Starify</h4>
      </div>
      <div className="nav-items">
        <Link to="/" smooth relative="path">
          Główna
        </Link>
        <Link to="/#services" smooth relative="path">
          Usługi
        </Link>
        <Link to="/#realizations" smooth relative="path">
          Realizacje
        </Link>
        <Link to="/shop" smooth relative="path">
          Sklep
        </Link>
      </div>
      <div className="account">
        <a href="https://www.google.com">
          <div className="button">
            <MdSpaceDashboard className="icon" />
            <p>Panel</p>
          </div>
        </a>
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label={label}
          className="burger"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default Navbar;
