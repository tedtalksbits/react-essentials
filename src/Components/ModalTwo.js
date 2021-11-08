import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const ModalButton = styled.a`
   background: red;
   padding: .5rem;
   cursor: pointer;

`
const ModalContainer = styled.div`
   background: ${props => props.bg || 'black'};
   padding: ${props => props.padding || '2em'};
   position: absolute;
   z-index: 2000;
   max-width: 400px;
   left: 0;
   right: 0;
   margin: auto;
   
`
const ModalTwo = ({ children, actionButton }) => {

   const [open, setOpen] = useState(false)



   const handleOpen = () => {

      const modal_bg = document.getElementById('modal-bg')
      modal_bg.classList.add('modal-backdrop')
      setOpen(true)
   }
   const modal_bg = document.getElementById('modal-bg')


   modal_bg.addEventListener('click', () => {

      modal_bg.classList.remove('modal-backdrop')
      setOpen(false)
   })

   const handleClose = () => {
      if (open === true) {

         setOpen(false);
         modal_bg.classList.remove('modal-backdrop')
      }

   }

   if (!open) {
      return (
         <Button
            smallPadding={true}
            onClick={() => { handleOpen(); handleClose() }}
            bg="lightgrey"
            hoverBg="#212121"
            hoverColor="white"
         >
            <i className='bx bx-dots-vertical-rounded'></i>
         </Button>

      )
   }
   return (
      <ModalContainer >

         <button className="close-button" onClick={handleClose}>x</button>
         <div className="content" style={{ margin: '2em 0' }} >{children}</div>
         <div style={{ width: '10rem' }} className="action-button" onClick={handleClose}>{actionButton}</div>

      </ModalContainer>
   )
}

export default ModalTwo
