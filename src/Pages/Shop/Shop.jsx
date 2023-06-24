import "./Shop.css";
import NavBar from "../../Components/Common/Navbar/Navbar";
import Footer from "../../Components/Common/Footer/Footer";

function Shop() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Soon</h1>
        <h4>
          Sprawdź <a href="https://starify.readyshop.io/">sklep</a>
        </h4>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
