import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { darkTheme } from '../data/themeData';
import SearchBar from '../Components/SearchBar';

const Item = styled.div`
   background: ${darkTheme.primary}aa;
   padding: .5rem .876rem;
   margin: .275rem .5rem;
   border-radius: 25px;
   border: 1px solid ${darkTheme.white};
   backdrop-filter: blur(25px) saturate(6);
   display: inline-block;
`
const ItemContainer = styled.div`

`
const UseEffect = () => {

   const [search, setSearch] = useState('');
   const [found, setFound] = useState([])

   const cars = ["mercedes", "nissan", "tesla", "BMW", "kia", "pontiac", "hyundai", "honda", "renault", "rolls-royce", "mercury", "toyota"]
   const carsObj = [{
      "id": 1,
      "make": "Hyundai",
      "model": "Santa Fe",
      "year": 2012,
      "mileage": 54874
   }, {
      "id": 2,
      "make": "Chevrolet",
      "model": "Malibu",
      "year": 2001,
      "mileage": 50019
   }, {
      "id": 3,
      "make": "Mitsubishi",
      "model": "RVR",
      "year": 1992,
      "mileage": 604
   }, {
      "id": 4,
      "make": "Mazda",
      "model": "Mazda6",
      "year": 2011,
      "mileage": 19891
   }]
   function findItem(query, array) {

      return array.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)

      // if indexof() returns -1 => result = not found
   }

   useEffect(() => {
      setFound(findItem(search, cars))

      console.log(found);
   }, [search])
   return (
      <div>
         <h1 style={{ margin: '2em 0' }}>Use Effect</h1>

         <SearchBar
            style={{ margin: '2rem 0' }}
            icon={<i className='bx bx-search'></i>}
            placeholder="Type to search"
            handleChange={(e) => setSearch(e.target.value)}
            value={search}
         />

         <h1>{found.map(el => (
            <Item key={el}>
               {el}
            </Item>


         ))}</h1>
      </div>
   )
}

export default UseEffect
