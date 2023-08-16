import React from 'react'
import MenuCard from './MenuCard'
import 'animate.css';
import drinks from '../assets/drinks.jpg'
import cuisine from '../assets/cuisine.jpg'
import appetizers from '../assets/appetizers.jpg'
function Menu() {
  const categories = [
    {
      title: 'Appetizers',
      image: appetizers, // URL to the appetizers image
      description: 'Delicious starters to tantalize your taste buds.',
      animation:'animate__animated animate__slideInLeft'
    },
    {
      title: 'Cuisines',
      image: cuisine, // URL to the cuisines image
      description: 'Explore a variety of cuisines from around the world.',
      animation:'animate__animated animate__slideInDown'

    },
    {
      title: 'Drinks',
      image: drinks, // URL to the drinks image
      description: 'Quench your thirst with our refreshing drink options.',
      animation:'animate__animated animate__slideInRight'

    },
  ];
  return (
    <div id='menu' className='bg-slate-900 text-orange-100'>
    
     <h3 className='text-3xl text-center p-5'>What we offer</h3>
<div className="grid md:grid-cols-3 gap-x-24 grid-cols-1 p-8">
{categories.map((category,index)=>{
return(
  <div className={`${category.animation}`}>
<MenuCard title={category.title} image={category.image} description={category.description}></MenuCard>
  </div>
)
})}
</div>
    </div>
  )
}

export default Menu