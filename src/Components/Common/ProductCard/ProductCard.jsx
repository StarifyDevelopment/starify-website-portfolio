import PropTypes from "prop-types";
import "./ProductCard.scss";

const ProductCard = ({ id, title, price, description, category, image }) => {
  return (
    <div className="productCard">
      <img src={image} alt={id} />
      <div className="content">
        <div className="left">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <h3 className="description">{description}</h3>
        </div>
        <div className="right">
          <h3 className="price">{price}zł</h3>
          <div className="button">
            <p>Szczegóły</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
