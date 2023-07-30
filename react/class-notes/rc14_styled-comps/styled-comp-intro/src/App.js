
import { Button, DarkButton } from "./components/Buton.styled";
import Flex from "./components/Flex";

const App = () => {
  return (
    <>
      <Flex bg="purple">
          <h1>Styled Components</h1>
          <Button>Tıkla</Button>
          <DarkButton>Send</DarkButton>
      </Flex>
    </>
  );
};

export default App;
