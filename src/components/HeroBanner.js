import React from 'react'
import {Box,Button,Stack,Typography} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

export default function HeroBanner() {
  


  return (
    <Box sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
    }} 
    position='relative' p='20px'
    >

     <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
     </Typography>

     <Typography 
     mt='23px' mb='30px'
     fontWeight='700' 
     sx={{fontSize:{lg:'44px',xs:'40px'}}}
     >
        Sweat, Smile <br/> and Repeat
     </Typography>

     <Typography
      fontSize='22px'
      mb={3}
      lineHeight='35px'
      >
        Check out the most effective exercises.
     </Typography>

     <Button
      sx={{backgroundColor:"#FF2625"}}
      variant="contained" 
      color='error'
      href='#exercises'>
        Explore Exercises
     </Button>

     <Typography 
     fontWeight='600'
     color='#FF2625'
     fontSize='200px'
     sx={{
        opacity:.1,
        display:{lg:'block',xs:'none'}
     }}
     >
        Exercise
     </Typography>

     <img src={HeroBannerImage}
      alt='banner' 
     className='hero-banner-img'/>

    </Box>
  )
}
