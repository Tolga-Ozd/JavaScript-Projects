import styled from "styled-components"

export const Button = styled.button`
background-color : hotpink;
 color: white;
 border: 2px solid hotpink;
 font-size: 1.3rem;
 padding: 0.7rem 2rem;
 border-radius: 20px;
 &:hover{
    cursor: pointer;
    transform: scale(0.96);
 }
`
//extension (yukarıdakini kullandık) özelliği
export const DarkButton = styled(Button)`
    background-color: black;
    color: white;
    border:none;
`