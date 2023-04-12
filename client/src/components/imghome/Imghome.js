import React from 'react'
import "./Imghome.css";
import img1 from './img/img1.png';
import img3 from './img/img2.png';
import img2 from './img/img3.webp';

export default function Imghome() {
  return (
    <div className='imghomeOuter'>
        <div className='imghomez1'>
            <div className='img1div'>
            <img src={img1} className = "img1" alt='not found' />
            </div>
            
            <div className='img2div'>
            <img src={img2} className = "img2" alt='not found' />
            </div>
        </div>
        <div className='imghomez2'>
        <div className='img3div'>
            <img src={img3} className = "img3" alt='not found'/>
            </div>
        </div>
        <div className='imghomez2'></div>
    </div>
  )
}
