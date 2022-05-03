import { Box } from "@chakra-ui/react";
import { MenuNav } from "./components/MenuNav";
import { ToggleColorMode } from "./components/ToggleColorMode";
import { Home } from "./Home";

function App() {
  return (
    <Box as="div" h="100vh">
      <MenuNav />  
      <Home />
      <ToggleColorMode />
    </Box>
  );
}

export default App;
