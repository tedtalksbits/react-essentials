import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../data/themeData'
import { b_radius } from '../utils/page'

const TextBox = styled.div`
   padding: .3rem .5rem;
   border-radius: ${b_radius};
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
   font-size: 1.785em;

   ::placeholder{
      color: ${darkTheme.white};
   }
`
const SearchBar = ({ icon, handleChange, value, style, placeholder, type }) => {
   return (
      <TextBox style={style}>
         {icon}
         <Input
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
            type={type}
         />
      </TextBox>
   )
}

export default SearchBar
