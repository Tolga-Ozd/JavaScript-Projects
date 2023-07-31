import Button from "./styled/Button"
import NavStyled from "./styled/NavStyled"

const Nav = () => {
  return (
   <NavStyled>

      <div>
        <img src="./images/logo.png" width="250px" alt="logo" />
      </div>

      <div>
        <Button >Apply  Courses</Button>
        <Button primary> Talk to Adviser</Button>
      </div>

   </NavStyled>
  )
}

export default Nav
