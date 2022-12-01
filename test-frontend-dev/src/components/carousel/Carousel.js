import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Box} from "@mui/material";

const itemsLength = [
  {
    src: "https://images.unsplash.com/photo-1669723008519-3b5043b5b826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src: "https://images.unsplash.com/photo-1625035271800-76258e23aaa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src: "https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src: "https://images.unsplash.com/photo-1624800131366-6da5fb02a654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src: "https://images.unsplash.com/photo-1653144549532-af5ce3689133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src: "https://images.unsplash.com/photo-1628270396864-f19b20f57aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src: "https://images.unsplash.com/photo-1596443019365-eb263a588404?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  }
]

const items = itemsLength.map((item, index) => {
  return (
    <img style={{height:"200px", width:"350px", objectFit:"cover"}} src={item.src} alt={`${index}`}/>
  );
});

export const Carousel = () => {
  return (
    <Box sx={{maxWidth:"1200px", margin: "30px auto"}}>
      <AliceCarousel
        autoWidth
        infinite
        autoPlay
        mouseTracking
        items={items}
      />
    </Box>
  )
}
