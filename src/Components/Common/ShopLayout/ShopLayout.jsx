import "./ShopLayout.scss";
import ProductCard from "../ProductCard/ProductCard";
import products from "/src/assets/data/products.json";

const ShopLayout = () => {
  return (
    <div className="container">
      {/* <h1>Soon</h1>
    <h4>
      Sprawdź <a href="https://starify.readyshop.io/">sklep</a>
    </h4> */}
      <div className="filters"></div>
      <div className="content">
        <div className="sort"></div>
        <div className="products">
          {products.map((data) => (
            <ProductCard
              key={data.id}
              title={data.title}
              price={data.price}
              description={data.description}
              category={data.category}
              image={data.image}
              bestSeller={data.bestSeller}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
