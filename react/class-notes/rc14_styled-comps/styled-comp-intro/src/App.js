
import { Button, DarkButton } from "./components/Buton.styled";
import Flex from "./components/Flex";
import Title from "./components/Title";

const App = () => {
  return (
    <>
      <Flex bg="#bebe">
          <Title renk="white" bgRenk="red">
          Styled Components
          </Title>
          <Button>Tıkla</Button>
          <DarkButton>Send</DarkButton>
      </Flex>
    </>
  );
};

export default App;
