import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../data/themeData'
import { b_radius } from '../utils/page'

const Container = styled.div`
   border-radius: ${b_radius};
   border: 1px ${darkTheme.white} solid;
   padding: 1em;
   background: ${darkTheme.white};
   width: 4rem;
   height: 4rem;
   margin-bottom: 1.1rem;
   display: block;
   place-items: center;
   transition: all ease-in-out .2s;
   position: relative;
   display: grid;
   place-items: center;
   cursor: pointer;

   :hover{
      i{

         color: ${darkTheme.primary}
      }
   }

   i{
      font-size: 2rem;
   }



`
const Chevron = ({ opposite, clickFunction }) => {
   return (
      <Container onClick={clickFunction}>

         {opposite ?

            <i className='bx bxs-chevron-right'></i>
            :

            <i className='bx bxs-chevron-left' ></i>
         }


      </Container>
   )
}

export default Chevron
