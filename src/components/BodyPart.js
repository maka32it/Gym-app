import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'
export default function BodyPart({item,setBodyPart,bodyPart}) {
  return (
    <Stack 
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{   
            borderTop: bodyPart === item ? '4px solid #FF2625' :'none',
            backgroundColor:'#FFF',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
        }
        onClick={()=>{
            setBodyPart(item)
            window.scrollTo({top:1800,left:100, behavior:'smooth'})
        }}
    >
        <img src={Icon} alt='dumbell' className='img-bodyPart'></img>
        <Typography fontSize='24px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}
