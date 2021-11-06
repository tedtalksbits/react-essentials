import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../data/themeData'

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
const SearchBar = ({ icon, handleChange, value, style }) => {
   return (
      <TextBox style={style}>
         {icon}
         <Input
            onChange={handleChange}
            value={value}
         />
      </TextBox>
   )
}

export default SearchBar
