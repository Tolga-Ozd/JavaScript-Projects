// import styled from "styled-components"

// import { Link } from "react-router-dom"

// const StyledLink = styled.Link``

// export default StyledLink

import styled, { css } from "styled-components"

const StyledLink = styled.a`
  text-decoration: none;
  color: red;
  &:hover {
    color: green;
  }

  ${({ react }) =>
    react &&
    css`
      background-color: black;
      color: #61dbfb;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      &:hover {
        opacity: 0.5;
      }
    `}
`

export default StyledLink
