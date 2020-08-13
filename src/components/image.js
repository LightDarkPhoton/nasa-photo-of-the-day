import React from 'react';


const Image = (props) => {
    const {imageURL, explanation, date, copyright} = props
    console.log(imageURL, 'HERE')

    return (
        <div className='post-image-wrapper'>
        <p>{date}</p>
        <img
          alt='post thumbnail'
          className='post-image'
          src={imageURL}
        />
        <p>{explanation}</p>
        <p>{copyright}</p>
      </div>
    )
}
export default Image;

