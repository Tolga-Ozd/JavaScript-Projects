import styled from "styled-components"

const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "#AF3953" : "white")};
  color: ${({ primary }) => (primary ? "white" : "#AF3953")};
  border: 1px solid #af3953;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  margin: 1rem 0.5rem;
  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
    cursor: pointer;
  }
`

export default Button


// escb kısayolu sondaki b=buton