import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar';
import styled from 'styled-components';
import { darkTheme } from '../data/themeData';
import { Button } from '../Components/Button'

const Form = styled.form`
   border-radius: 12px;
   padding: 2.2rem 3rem;
   background: ${darkTheme.dark};
   display: flex;
   flex-direction: column;
   gap: .5rem;

   &>*{
      
   }
`
const Crud = () => {
   const URL = `https://saving-app-api.herokuapp.com/data`;
   const [data, setData] = useState([]);

   const fetchData = async () => {
      const request = await fetch(URL, {
         method: 'GET'
      })
      const response = await request.json();
      console.log(response)
      setData(response)
   }

   useEffect(() => {
      fetchData()
   }, [])


   return (
      <div>
         <h1>C.R.U.D</h1>
         <Form action="">
            <SearchBar
               type="text"
               icon={<i className='bx bxs-user-pin'></i>}
               placeholder="username"
            />
            <SearchBar
               type="text"
               icon={<i class='bx bxs-envelope'></i>}
               placeholder="email"
            />
            <SearchBar
               type="text"
               icon={<i class='bx bxs-pin' ></i>}
               placeholder="location"
            />
            <div className="button">
               <Button style={{ margin: '0' }}>upload <i class='bx bx-upload'></i></Button>
            </div>
            <Button style={{ textAlign: 'center' }}>Submit</Button>

         </Form>
         {/* form */}
         {/* search */}
         {/* display data */}
      </div>
   )
}

export default Crud
