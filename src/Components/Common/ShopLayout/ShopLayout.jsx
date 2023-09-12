import { useState } from "react";
import { Select } from "@mantine/core";
import ProductCard from "../ProductCard/ProductCard";
import products from "/src/assets/data/products.json";
import "./ShopLayout.scss";

const ShopLayout = () => {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleFilter = (category, sortOption) => {
		const filtered = products.filter(
			(product) => category === "" || product.category === category
		);
		switch (sortOption) {
			case "Sortowanie domyślne":
				// Brak sortowania dla domyślnego
				break;
			case "Od najnowszych":
				filtered.sort((a, b) => b.dateAdded - a.dateAdded);
				break;
			case "cena - od najniższej":
				filtered.sort((a, b) => a.price - b.price);
				break;
			case "cena - od najwyższej":
				filtered.sort((a, b) => b.price - a.price);
				break;
			default:
				break;
		}

		setFilteredProducts(filtered);
		setSelectedCategory(category);
	};

	return (
		<div className="container">
			<div className="filters">
				<h3>Kategorie</h3>
				<label>
					<input
						type="radio"
						value=""
						checked={selectedCategory === ""}
						onChange={() => handleFilter("")}
					/>
					Wszystko
					<span></span>
				</label>
				<label>
					<input
						type="radio"
						value="Websites"
						checked={selectedCategory === "Websites"}
						onChange={() => handleFilter("Websites")}
					/>
					Strony
					<span></span>
				</label>
				<label>
					<input
						type="radio"
						value="Websites"
						checked={selectedCategory === "Minecraft plugins"}
						onChange={() => handleFilter("Minecraft plugins")}
					/>
					Pluginy
					<span></span>
				</label>
				<label>
					<input
						type="radio"
						value="Websites"
						checked={selectedCategory === "Discord bots"}
						onChange={() => handleFilter("Discord bots")}
					/>
					Boty discord
					<span></span>
				</label>
				<label>
					<input
						type="radio"
						value="Websites"
						checked={selectedCategory === "Game servers"}
						onChange={() => handleFilter("Game servers")}
					/>
					Serwery gier
					<span></span>
				</label>
				<label>
					<input
						type="radio"
						value="Websites"
						checked={selectedCategory === "Servers"}
						onChange={() => handleFilter("Servers")}
					/>
					Serwery
					<span></span>
				</label>
				<label>
					<input
						type="radio"
						value="Websites"
						checked={selectedCategory === "Databases"}
						onChange={() => handleFilter("Databases")}
					/>
					Bazy danych
					<span></span>
				</label>
				<label>
					<input
						type="radio"
						value="Websites"
						checked={selectedCategory === "Marketing plans"}
						onChange={() => handleFilter("Marketing plans")}
					/>
					Marketing
					<span></span>
				</label>
			</div>
			<div className="content">
				<div className="sort">
					<div className="results">
						<img src="./images/icons/product.svg" />
						<p>
							<span className="none">Liczba wyników:</span>{" "}
							<span>{filteredProducts.length}</span>
						</p>
					</div>
					<div className="sorting">
						<Select
							data={[
								"Sortowanie domyślne",
								"Od najnowszych",
								"cena - od najniższej",
								"cena - od najwyższej",
							]}
							defaultValue="Sortowanie domyślne"
							variant="filled"
							onChange={(selectedOption) => {
								handleFilter(selectedCategory, selectedOption);
							}}
							withAsterisk
						/>
					</div>
				</div>
				<div className="products">
					{filteredProducts.map((data) => (
						<ProductCard
							key={data.id}
							id={data.id}
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
