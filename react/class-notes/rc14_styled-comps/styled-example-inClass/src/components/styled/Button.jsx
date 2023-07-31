import styled from 'styled-components';

const Button = styled.button`
background-color:${({primary }) =>(primary ? "#B03C54" : "white")} ;
color: ${({primary }) =>(primary ?  "white":  "#B03C54" )} ;
`;

export default Button;


// escb kısayolu sondaki b=buton