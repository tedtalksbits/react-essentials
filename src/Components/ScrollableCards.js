import React from 'react'
import styled from 'styled-components/macro';
import { cardData } from '../../data/scrollableCardsData';
import { mixin } from '../NavBar/NavBar';


const CardsGroup = styled.div`
   max-width: 1150px;
   margin: 0 auto 5.5rem;
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
   @media screen and (min-width: ${mixin}){
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
const ScrollableCards = () => {
   return (
      <CardsGroup className="card">
         <Container>
            {cardData.map((card, index) => {
               return (
                  <Card key={index} >
                     <CardImage src={card.image} css={`background: ${card.bg};`} />
                  </Card>
               )
            })}
         </Container>
      </CardsGroup>
   )
}

export default ScrollableCards;
