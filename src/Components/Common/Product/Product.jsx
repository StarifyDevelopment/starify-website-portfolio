import PropTypes from "prop-types";
import products from "/src/assets/data/products.json";
import "./Product.scss";

const Product = ({ id }) => {
	const product = products.find((p) => p.id === id);
	if (!product) {
		return <div className="not-found">Product not found.</div>;
	}

	return (
		<div className="product-container">
			<div className="product">
				<div className="product-hero">
					<img src="../Banner.png" />
					<div className="text">
						<p className="category">{product.category}</p>
						<div className="title">
							<h2>{product.title}</h2>
							<h3>{product.price}zł</h3>
						</div>
						<a
							href={`${product.checkoutLink}`}
							target="_blank"
							rel="noreferrer"
						>
							<div className="button">
								<p>Kup</p>
							</div>
						</a>
					</div>
				</div>
				<hr />

				<div className="description">
					<h3>Opis</h3>
					<p>{product.descriptionLong}</p>
				</div>
			</div>
			<div className="proposed">
				<h2>Proponowane</h2>
				<div className="proposed-products">
					<div className="proposed-product">
						<img src="../Banner.png" />
					</div>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Product;
