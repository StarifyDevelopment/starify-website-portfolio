import "./App.css";
import NavBar from "../Components/Common/Navbar/Navbar";
import Hero from "../Components/Common/Hero/Hero";
import Footer from "../Components/Common/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<Footer />
			<Analytics />
		</>
	);
}

export default App;
