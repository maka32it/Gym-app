import React, { useEffect, useState } from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

export default function SearchExercises({setBodyPart,bodyPart,setExercises}) {
    const [search,setSearch] = useState('')
    const [bodyParts,setBodyParts] = useState([])

    useEffect(()=>{
        const fetchExercisesData = async()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
            setBodyParts(['all',...bodyPartsData])
        }
        fetchExercisesData()
    },[])

    async function handleSearch(){
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
            
            const searchedExercise = exercisesData.filter(exercise=>{
                return (
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search)
                )
            })
            setSearch('')
            setExercises(searchedExercise)
        }

    }
  return (
    <Stack 
    alignItems={'center'} mt='37px'
    justifyContent={'center'} p='20px'
     >
        <Typography fontWeight='700' sx={{
            fontSize:{lg:'44px',xs:'24px'},
            mb:'50px',
            textAlign:'center'
            
            }}>
            Awesome Exercises You <br/>
             should know
        </Typography>

        <Box position='relative' mb='72px'>
            <TextField
            sx={{
                input:{
                    fontWeight:'700',
                    border:'none',
                    borderRadius:'4px'
                },
                width:{
                    lg:'800px', xs:'250px'
                },
                backgroundColor:'#fff',
                borderRadius:'40px'
            }}
             height='76px'
             value={search}
             onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
            placeholder='Search Exercises'
            type='text'
             />

             <Button
                onClick={handleSearch}
                className='search-btn'
                sx={{bgcolor:'#FF2625',
                color:'#FFF',
                textTransform:'none',
                width:{
                    lg:'175px',
                    xs:'80px'
                },
                fontSize:{
                    lg:'20px',
                    sm:'14px'
                },
                height:'56px',
                }}
             >
                Search
             </Button>

        </Box>

        <Box sx={{position:'relative',width:'100%', padding:'20px'}}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart}
                 setBodyPart={setBodyPart} isBodyPart={true}/>
        </Box>

    </Stack>
  )
}
