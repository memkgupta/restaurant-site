import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Gallery() {
    const images =[
       ' https://placehold.co/200x200 ',
       ' https://placehold.co/200x200 ',
       ' https://placehold.co/200x200 ',
       ' https://placehold.co/200x200 ',
       ' https://placehold.co/200x200 ',
       ' https://placehold.co/200x200 ',
       ' https://placehold.co/200x200 ',
       ' https://placehold.co/200x200 '

    ]
    const settings = {
        dots: false,
        centerMode:true,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
  return (
   <section className='bg-slate-900 p-24'>
    <Slider {...settings} >
    {images.map((image, index) => 
    {
        console.log(image)
        return(
            <div key={index} className='text-white p-3 hover:scale-150 transition-scale duration-200 ease-in-out' >
           <a href={image} target='_blank'> <img  src={image} alt={`Slide ${index}`} /></a>
          </div>
         )
    }
      )}
    </Slider>
   </section>
  )
}

export default Gallery