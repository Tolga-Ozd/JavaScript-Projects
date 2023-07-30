import { Button, DarkButton, PinkButton } from "./components/Buton.styled"
import Flex from "./components/Flex"
import StyledLink from "./components/Links"
import Title from "./components/Title"

const App = () => {
  return (
    <>
      <Flex>
        <StyledLink href="https://www.clarusway.com">Clarusway</StyledLink>
        <StyledLink react href="https://www.react.dev">React</StyledLink>
      </Flex>

      <Flex bg="#bebe">
        <Title renk="white" bgRenk="red">
          Styled Components
        </Title>
        <Button>Tikla</Button>
        <DarkButton>Send</DarkButton>
      </Flex>

      <Title renk="purple">Flexbox</Title>
      <Title bgRenk="green">Flexbox</Title>
      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>

      <Flex>
        <PinkButton>Pembe</PinkButton>
        <PinkButton primary>İçi boş</PinkButton>
      </Flex>
    </>
  )
}

export default App
