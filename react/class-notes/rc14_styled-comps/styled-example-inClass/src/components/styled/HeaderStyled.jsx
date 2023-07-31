import styled from 'styled-components';

const HeaderStyled = styled.header`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
@media(max-width:700px){
    flex-direction: column;
  }

/* & div , img {
    flex: 1 ;
} */
// bu özellik resim ve yazıları aynı boyut yapar.

& div {
    flex: 2 ;
}

& img {
    flex: 1 ;
}
// burada div 2 , resim 1 br olur

`;

export default HeaderStyled;
