import "./Rules.css";
import NavBar from "../../Components/Common/Navbar/Navbar";
import Footer from "../../Components/Common/Footer/Footer";
import { MantineProvider } from "@mantine/core";

function App() {
	return (
		<>
			<MantineProvider
				theme={{ colorScheme: "dark" }}
				withGlobalStyles
				withNormalizeCSS
			>
				<NavBar />

				<Footer />
			</MantineProvider>
		</>
	);
}

export default App;
