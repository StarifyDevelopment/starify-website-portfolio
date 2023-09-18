import "./Home.css";
import NavBar from "../../Components/Common/Navbar/Navbar";
import Hero from "../../Components/Common/Hero/Hero";
import Footer from "../../Components/Common/Footer/Footer";
import Services from "../../Components/Common/Services/Services";
import Realizations from "../../Components/Common/Realizations/Realizations";
import { MantineProvider } from "@mantine/core";


function App() {
  return (
    <>
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>

      <NavBar />
      <Hero />
      <Services />
      <Realizations />
      <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
