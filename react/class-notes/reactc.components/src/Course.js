import React from 'react'

const Course = ({image ,title ,description}) => {
    // props üstteki gibi tanımlanacağı gibi alttaki gibi de tanımlanabilir
    // const {title , description} = props;

  return (

    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
            <img src= {image} alt="Courses" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                
            </div>
            </div>

            <div className="content">
                {description}
            </div>
        </div>
</div>


  )
}

export default Course
