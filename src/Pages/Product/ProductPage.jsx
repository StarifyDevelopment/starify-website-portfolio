import NavBar from "../../Components/Common/Navbar/Navbar";
import Footer from "../../Components/Common/Footer/Footer";
import Product from "../../Components/Common/Product/Product";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <Product id={id} />
      <Footer />
    </>
  );
};

export default ProductPage;
