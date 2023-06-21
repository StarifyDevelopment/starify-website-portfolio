import "./App.css";
import { Button } from "@mantine/core";
import { FaDiscord } from "react-icons/fa";
import Card from "../Components/Common/Card/Card";
import Footer from "../Components/Common/Footer/Footer";

function App() {
  return (
    <>
      <div className="parent">
        <div className="container">
          <h1>
            Starify <span>Development</span>
          </h1>
          <Button
            mt={20}
            variant="gradient"
            leftIcon={<FaDiscord size={24} />}
            radius="md"
            size="md"
            gradient={{ from: "indigo.5", to: "indigo.9", deg: 160 }}
          >
            <a href="https://discord.gg/gSj5evjR8S">Discord</a>
          </Button>
          <Card path="./snippet.svg" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
