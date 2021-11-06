import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Components/Button'
import LoginImage from '../images/login.png'
import LogoutImage from '../images/loginout.png'
import { darkTheme } from '../data/themeData'
const FullHeight = styled.div`
   /* min-height: 80vh; */
   display: grid;
   place-items: center;
   gap: 2.2em;

   h1{
      font-size: 2.2em;
      margin: 4rem 0 1.2rem;
   }

`
const Image = styled.img`

   height: 400px;
   width: 100%;
   object-fit: contain;
`

const ImageContainer = styled.div`

   background: ${darkTheme.white};
   border-radius: 20px;
`

const Form = styled.form`
   display: flex;
   align-items: center;
   flex-direction: column;
`

const TextBox = styled.div`
   padding: .3rem .5rem;
   border-radius: 12px;
   background: ${darkTheme.white};
   display: flex;
   align-items: center;
   gap: .2rem;
`

const Input = styled.input`
   background: transparent;
   border: none;
   padding: none;
   outline: none;
   color: white;
   width: 100%;
   font-size: 1.2em;
`
const UseState = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false)

   const [userName, setUserName] = useState("")

   const handleChange = (e) => {
      setUserName(e.target.value)

      setUserName('')
   }

   return (

      <div>

         <h1>Use State && Conditional Rendering</h1>

         <FullHeight>

            <h1 style={{ color: `${darkTheme.primary}` }}>{isLoggedIn ? `Welcome Back ${userName}!` : 'Please sign in'}</h1>
            <ImageContainer>

               <Image src={isLoggedIn ? LoginImage : LogoutImage} alt="illustration of man holding phone" />
            </ImageContainer>
            <Form className="form">

               <TextBox className="input-container">

                  <i className='bx bx-user'></i>
                  <Input
                     type="text"
                     placeholder="name"
                     required
                     value={userName}
                     onChange={handleChange}
                  />
               </TextBox>
               <Button onClick={(e) => {
                  e.preventDefault()
                  setIsLoggedIn(!isLoggedIn)

               }}>{isLoggedIn ? 'sign out' : 'sign in'}</Button>
            </Form>

         </FullHeight>
      </div>

   )

}

export default UseState
