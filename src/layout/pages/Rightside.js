import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider';

const Rightside = () => {
    const img=useLoaderData()
    console.log(img)
    return (
        <div className='grid grid-cols-3 gap-2'>
            {
                img.map(i=><Slider
                key={i.id}
                i={i}
                ></Slider>)
            }
        </div>
    );
};

export default Rightside;