import React from 'react';

const Slider = ({i}) => {
    console.log(i)
    const {image_url}=i
    return (
        <div className="carousel w-44 h-44">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image_url} className="w-full" />
          

          
        </div>
        </div> 
        
    
     
    );
};

export default Slider;