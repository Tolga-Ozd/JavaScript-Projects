import React from 'react'
import HeaderStyled from './styled/HeaderStyled'
import Button from './styled/Button'
import Image from './styled/Image'


const Header = () => {
  return(
    <HeaderStyled >
    <div>
     <h1>The IT Career of Your Dreams Starts Here!</h1>
     <p>
       Clarusway is a leading international software Bootcamp. Join a micro
       class online with other trainees and learn coding skills with a
       highly-skilled instructor.
     </p>
     <Button primary>Start Your New Carier</Button>
   </div>

    <Image src='./images/hero.jpg' />

    </HeaderStyled >
  )
}

export default Header;