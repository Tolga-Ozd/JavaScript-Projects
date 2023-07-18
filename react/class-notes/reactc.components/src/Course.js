import React from 'react'

const Course = ({image ,title ,description}) => {
    // props üstteki gibi tanımlanacağı gibi alttaki gibi de tanımlanabilir
    // const {title , description} = props;

  return (
    <div>
        <div>{title}</div>
        <div>{image}</div>
        <div>{description}</div>
    </div>
  )
}

export default Course
