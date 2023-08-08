import "./Shop.css";
import NavBar from "../../Components/Common/Navbar/Navbar";
import Footer from "../../Components/Common/Footer/Footer";
import ShopLayout from "../../Components/Common/ShopLayout/ShopLayout";
import { MantineProvider } from "@mantine/core";

function Shop() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <NavBar />
      <ShopLayout />
      <Footer />
    </MantineProvider>
  );
}

export default Shop;
