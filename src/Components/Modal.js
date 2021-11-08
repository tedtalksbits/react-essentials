import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

export const ModalContainer = styled.div`
   /* position: absolute; */
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;

`

const ModalCard = styled.div`
   display: ${({ modalOpen }) => modalOpen ? 'block' : 'none'};
   z-index: ${({ modalOpen }) => modalOpen ? '2002' : ''};
   position: absolute;
   background: #15192598;
   border-radius: 5px;
   border: 1px rgba(0,0,0, 0.2) solid;
   backdrop-filter: blur(25px);
   padding: .875rem;
   top: -120px;
   left: 0;
   min-height: 120px;
   min-width: 240px;
   color: white;
   animation: fadeIn .4s linear;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
   /* width: 300px;
   height: auto;
   max-height: 480px; */
   /* top: -50%;
   left: 50%;
   margin-right: -50%;
   transform: translate(-50%, -50%); */
`
// const ModalCard = styled.div`
//    display: ${({ modalOpen }) => modalOpen ? 'block' : 'none'};
//    z-index: ${({ modalOpen }) => modalOpen ? '2002' : ''};
//    background: #15192598;
//    border-radius: 5px;
//    border: 1px rgba(0,0,0, 0.2) solid;
//    backdrop-filter: blur(25px);
//    padding: .875rem;
//    color: white;
//    animation: fadeIn .4s linear;
//    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
//    width: 300px;
//    height: auto;
//    max-height: 480px;
//    position: absolute;

// `
export const Invisible = styled.div`
   display: ${({ modalOpen }) => modalOpen ? 'block' : 'none'};
   background: #000000aa;
   /* backdrop-filter: blur(0px) saturate(0.5); */
   position: absolute;
   z-index: 200;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   height: 100%;
   width: 100%;

`

const ModalWrapper = styled.div`
   /* position: relative; */
   
`



const Modal = ({ modalContent }) => {

   const [open, setOpen] = useState(false)


   return (

      <>
         <Invisible className="invisible" onClick={() => setOpen(false)} modalOpen={open} />
         <ModalWrapper className="modal-wrapper">
            <Button className="modal-button" smallPadding={true} onClick={() => setOpen(!open)}><i className='bx bx-dots-vertical-rounded'></i></Button>
            <ModalCard className="modal-card" modalOpen={open}>
               {modalContent}
            </ModalCard>

         </ModalWrapper>

      </>
   )
}

export default Modal
