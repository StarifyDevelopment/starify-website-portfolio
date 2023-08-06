import "./Home.css";
import NavBar from "../../Components/Common/Navbar/Navbar";
import Hero from "../../Components/Common/Hero/Hero";
import Footer from "../../Components/Common/Footer/Footer";
import Services from "../../Components/Common/Services/Services";
// import Realizations from "../../Components/Common/Realizations/Realizations";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      {/* <Realizations /> */}
      <Footer />
    </>
  );
}

export default App;
