import "./App.css";
import { Button } from "@mantine/core";
import { FaDiscord } from "react-icons/fa";

function App() {
  return (
    <>
      <h1>
        Starify <span>Development</span>
      </h1>
      <Button
        variant="gradient"
        leftIcon={<FaDiscord size={24} />}
        radius="md"
        size="md"
        gradient={{ from: "indigo.7", to: "indigo.9", deg: 160 }}
      >
        <a href="https://discord.gg/gSj5evjR8S">Discord</a>
      </Button>
    </>
  );
}

export default App;
