import React from 'react';
import styled from 'styled-components'


const StyledImageContainer = styled.div`
  display: flex;
  color: ${props => props.theme.primaryColor};
  #date {
    margin-bottom: 2%;
    font-weight: bold;
    
  }

  img {
    border-radius: 50%;

  }

  p {
    font-size: 13px;

    margin-top: 2%;
    margin-left: 30%;
    margin-right: 30%;
    
  };

  #copyright {
    font-weight: bold;
    color: black;
  };
`
const Image = (props) => {
    const {url, explanation, date, copyright} = props.data
    console.log(url, 'HERE')

    return (
      <StyledImageContainer>
        <div className='post-image-wrapper'>
        <p id="date">{date}</p>
        <img
          alt='post thumbnail'
          className='post-image'
          src={url}
        />
        <p>{explanation}</p>
        <p id="copyright">{copyright}</p>
      </div>
      </StyledImageContainer>
    )
}
export default Image;

