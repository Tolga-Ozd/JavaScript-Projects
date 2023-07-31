// escn kısayol
import styled from 'styled-components';


export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  @media(max-width:${({theme})=>theme.breakpoints.md}){
    flex-direction: column;
  }

  background-color: ${({theme}) =>theme.colors.primary};
`

export default NavStyled;
