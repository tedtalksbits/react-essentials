import React, { useReducer } from 'react'
import styled from 'styled-components'
import Modal from '../Components/Modal'
import { darkTheme } from '../data/themeData'

const IconContainer = styled.div`

   i{
      font-size: 2em;
      color: #db0066;
      animation: ${({ liked }) => liked ? 'animate .3s ease forwards' : 'unlike .3s ease forwards'};
      cursor: pointer;
      
      @keyframes animate {
         0%{opacity: 0; transform: translateY(10px)}
         100%{opacity: 1; font-size: 2.3em; transform: translateY(0px)}
      }

      @keyframes unlike {
         0%{font-size: 2.3em}
         100%{font-size: 2em;}
      }
     
   }

`

const Box = styled.div`
   margin: 2rem 0; 
   border: ${darkTheme.white} 1px solid;
   border-radius: 20px; 
   padding: 20px;
   text-align: center; 
   background: ${darkTheme.white};
   box-shadow: ${({ liked }) => liked ? '#db00662c 0px 4px 22px' : ''} ;
   transition: all ease .3s;

`
const UseReducer = () => {

   const [checked, toggle] = useReducer(
      ((checked) => !checked),
      false
   )

   const [liked, likeToggle] = useReducer(
      ((liked) => !liked),
      false
   )
   return (
      <div style={{ background: checked ? `${darkTheme.dark}` : '' }}>
         <h1 style={{ marginBottom: '3rem' }}>Use Reducer</h1>
         <div className="toggle-container" style={{ textAlign: 'center' }}>

            <label htmlFor="">Apply Background? </label>
            <input
               type="checkbox"
               name="checkbox"
               id="checkbox"
               value={checked}
               onChange={toggle}
            />
         </div>

         {/* <h1>{checked ? "checked" : "un-checked"}</h1> */}

         <IconContainer liked={liked}>

            <Box className="like-me" liked={liked}>

               <h1>Like me!</h1>
               {liked ?
                  <i className='bx bxs-heart' onClick={likeToggle}></i>

                  :

                  <i className='bx bx-heart' onClick={likeToggle}></i>

               }
            </Box>
         </IconContainer>

         <Modal />

      </div>
   )
}

export default UseReducer
