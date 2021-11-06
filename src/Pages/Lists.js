import React, { useState } from 'react'
import styled from 'styled-components/macro';
import { darkTheme } from '../data/themeData'


const CardsGroup = styled.div`
   max-width: 1150px;
   margin: 3rem auto 5.5rem;
`
const Card = styled.div`
   height: 220px;
   width: 220px;
   border-radius: 1.5rem;
   scroll-snap-align: start;
   flex-shrink: 0;
   overflow: hidden;
   cursor: pointer;
   position: relative;
   :hover{
      border: 2px white solid;
   }
   @media screen and (min-width: 750px){
     width: 150px;
     height: 150px;
   }
   
`
const Container = styled.div`
  display: flex;
  gap:.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 768px){
     
  }
 
`
const CardImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
   transition: ease-in-out .4s all;

   :hover{
     width: 120%;
     height: 120%;
   }
`

const ColorBox = styled.div`
   width: 200px;
   height: 200px;
   background: ${props => props.background};
   border-radius: 20px;
   border: 1px ${darkTheme.white} solid;

`
const Select = styled.select`

   padding: 0.3rem 1rem;
   font-size: 1.2em;
   background: ${darkTheme.white};
   color: white;
   border: 1px solid ${darkTheme.white};
   border-radius: 5px;
   cursor: pointer;

`
const ItemsContainer = styled.div`
   display: grid;
   place-items: center;
   gap: 1em;
`
const Lists = () => {

   const [bgColor, setBgColor] = useState('#21daed')

   const cardData = [
      {
         image: 'https://robohash.org/pariaturporrorerum.png?size=200x200&set=set1',
         bg: '#8c1bf1',
         text: "Michelle"
      },
      {
         image: 'https://robohash.org/inventoremagnamconsequuntur.png?size=200x200&set=set1',
         bg: '#f766f8',
         text: "Hunter"
      },
      {
         image: 'https://robohash.org/accusantiumtemporibushic.png?size=200x200&set=set1',
         bg: '#f6f8bc',
         text: "Mike"
      },
      {
         image: 'https://robohash.org/beataeipsamnon.png?size=200x200&set=set1',
         bg: '#f8c7ba',
         text: "Aaron"
      },
      {
         image: 'https://robohash.org/quialaborumquo.png?size=200x200&set=set1',
         bg: '#baf8e3',
         text: "Elizabeth"
      },
      {
         image: 'https://robohash.org/consectetursedautem.png?size=200x200&set=set1',
         bg: '#1ef1df',
         text: "Chasity"
      },
      {
         image: 'https://robohash.org/nequeatea.png?size=200x200&set=set1',
         bg: '#f86868',
         text: "Tequan"
      },

   ]


   return (
      <div>
         <h1>Lists</h1>
         <h5>Arrays</h5>
         <CardsGroup className="card">
            <Container>
               {cardData.map((card) => (
                  <div className="ui" key={card.text}>
                     <p style={{ textAlign: 'center', marginBottom: '.5em', color: '#ffffff80' }}>{card.text}</p>

                     <Card  >
                        <CardImage src={card.image} style={{ background: `${card.bg}` }} />
                     </Card>
                  </div>
               ))}
            </Container>
         </CardsGroup>

         <h5>Inputs</h5>



         <ItemsContainer>

            <Select
               name="colors"
               value={bgColor}
               onChange={(e) => setBgColor(e.target.value)}
            >
               {cardData.map(({ bg, text }) => (
                  <option key={text}>{bg}</option>
               ))}
            </Select>
            <ColorBox background={bgColor} />
         </ItemsContainer>


      </div>
   )
}

export default Lists
