import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Components/Button'
import LoginImage from '../images/login.png'
import LogoutImage from '../images/loginout.png'
import { darkTheme } from '../data/themeData'
import SearchBar from '../Components/SearchBar'
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

const UseState = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const [userName, setUserName] = useState("")
   const [loggedInUser, setLoggedInUser] = useState("")

   const handleChange = (e) => {
      setUserName(e.target.value)

   }
   const handleLogin = (e) => {

      if (userName === "" && !isLoggedIn) {
         alert('sign in please')
      }
      else {

         setIsLoggedIn(!isLoggedIn)
         setLoggedInUser(userName)
         clearInput()
      }

   }
   const clearInput = () => {
      setUserName("");
   }

   return (

      <div>

         <h1>Use State & Conditional Rendering</h1>

         <FullHeight>

            <h1 style={{ color: `${darkTheme.primary}`, textTransform: 'capitalize' }}>{isLoggedIn ? `Welcome Back ${loggedInUser}!` : 'Please sign in'}</h1>
            <ImageContainer>

               <Image src={isLoggedIn ? LoginImage : LogoutImage} alt="illustration of man holding phone" />
            </ImageContainer>
            <Form className="form" >
               {isLoggedIn ? '' :

                  <SearchBar
                     icon={<i className='bx bx-user'></i>}
                     handleChange={handleChange}
                     value={userName}
                  />
               }
               <Button type='submit' onClick={(e) => {
                  e.preventDefault()
                  handleLogin()
               }}>{isLoggedIn ? 'sign out' : 'sign in'}</Button>
            </Form>

         </FullHeight>
      </div>

   )

}

export default UseState
