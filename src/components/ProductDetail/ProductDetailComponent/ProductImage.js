import React from 'react'
import { makeStyles } from '@mui/styles'
import { Card, CardActionArea, CardMedia, Grid, Hidden, Skeleton } from '@mui/material'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  ProductContainer :{
      
  },
  ProductImage :{

  },
  image :{

  }
}))




const ProductImage = ({detailProduct,index}) => {
  const classes = useStyles()
  const setting = {
    dots: false,
    Infinity: false,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 1
  }
  return (
    <div>ProductImage</div>
  )
}

export default ProductImage