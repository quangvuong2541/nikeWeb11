 import React from 'react'
import Carousel from './BodyComponent/Carousel'
 
 const Body = (props) => {
   return (
     <div>
        <Carousel   carouselImg={props.carouselImg}/>
     </div>
   )
 }
 
 export default Body