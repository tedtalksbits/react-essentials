import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar';
import styled from 'styled-components';
import { darkTheme } from '../data/themeData';
import { Button } from '../Components/Button'
import FileBase64 from 'react-file-base64';
import { b_radius } from '../utils/page';
import Modal, { Invisible, ModalCard, ModalContainer, ModalWrapper } from '../Components/Modal';
import ModalTwo from '../Components/ModalTwo';


const Form = styled.form`
   border-radius: 12px;
   padding: 2.2rem 3rem;
   background: ${darkTheme.dark};
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   max-width: 570px;
   /* box-shadow: rgb(1, 4, 9) 0px 8px 24px 0px; */
   margin: 2em auto;

   &>*{
      
   }
`
const FormContainer = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 1em;
`
const CardContainer = styled.div`
   
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   grid-gap: 1rem;
   margin: 8rem 0;
 
`
const ProfileCard = styled.div`
   background: linear-gradient(transparent, transparent), url(${props => props.img}) center center no-repeat;
   background-size: cover;
   min-height: 320px;
   outline: 1px ${darkTheme.white} solid;
   border-radius: ${b_radius};
   overflow: hidden;
   /* position: relative; */
`
const ProfileCardTextContainer = styled.div`
   background: #000209ab;
   height: 100%;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: end;
   transition: .3s cubic-bezier(0.23, 1, 0.320, 1) all;
   
   :hover{
      background: #00020a4a;
      p{
         text-shadow: 0px 0px 7px black;
      }
      h1{
         text-shadow: 0px 0px 7px black;
      }
   }

   p{
      width: 162px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
   }

`
const Crud = () => {
   const [modalOpen, setModalOpen] = useState(false)
   const URL = `https://saving-app-api.herokuapp.com/data`;
   const [data, setData] = useState([]);
   const [post, setPost] = useState({
      username: "",
      email: "",
      location: "",
      user_avatar: ""
   })

   const [updater, setUpdater] = useState(1);
   const [currentId, setCurrentId] = useState('');

   /************************** FETCH **************************/
   const fetchData = async () => {
      const request = await fetch(URL, {
         method: 'GET'
      })
      const response = await request.json();
      console.log(response)
      setData(response)
   }

   const clearForm = () => {
      setPost({
         username: "",
         email: "",
         location: "",
         user_avatar: ""
      })
   }
   /************************** POST **************************/
   const postData = async () => {

      if (post.username && post.email) {

         try {
            const request = await fetch(URL, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(post)

            })

            const response = await request.json();
            setUpdater(updater + 1)
            clearForm();
            console.log(response)

         } catch (error) {
            console.log(error);
         }
      }
      else {
         alert('Please enter a username and email')
      }
   }

   /************************** DELETE **************************/

   const deleteData = async (id) => {

      // console.log(`${URL}/${id}`)

      try {
         const request = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
         })
         const result = await request.json();
         setUpdater(updater + 1)
         console.log(result);

      } catch (error) {
         console.log(error);
      }

   }

   const handleDelete = (itemid) => {
      deleteData(itemid)
   }

   /************************** Update as the Side Effect **************************/
   useEffect(() => {
      fetchData()
   }, [updater])

   /************************** MODAL **************************/
   const handleModal = () => {
      setModalOpen(!modalOpen);
   }




   return (
      <div>
         <h1>C.R.U.D</h1>
         <Form autoComplete='off' noValidate onSubmit={(e) => { e.preventDefault(); }}>
            <FormContainer className="form-container">

               <SearchBar
                  type="text"
                  icon={<i className='bx bxs-user-pin'></i>}
                  placeholder="username"
                  value={post.username}
                  handleChange={(e) => setPost({ ...post, username: e.target.value })}
               />
               <SearchBar
                  type="text"
                  icon={<i className='bx bxs-envelope'></i>}
                  placeholder="email"
                  value={post.email}
                  handleChange={(e) => setPost({ ...post, email: e.target.value })}
               />
            </FormContainer>
            <SearchBar
               type="text"
               icon={<i className='bx bxs-pin' ></i>}
               placeholder="location"
               value={post.location}
               handleChange={(e) => setPost({ ...post, location: e.target.value })}
            />
            <div className="button">
               <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setPost({
                     ...post, user_avatar: base64
                  })}
               />
            </div>
            <div className="submit" style={{ display: 'grid', placeItems: 'center' }}>

               <Button style={{ textAlign: 'center', width: '70%' }} onClick={postData}>Sign Up</Button>
            </div>

         </Form>


         {/* search */}

         <CardContainer>

            {data.map(user => (
               <ProfileCard key={user.username} img={user.user_avatar || "https://robohash.org/saepesimiliqueculpa.png?size=500x500&set=set3"}  >

                  <ProfileCardTextContainer >

                     <div className="modal-open-btn" onClick={() => { setCurrentId(user.id) }}>

                        <ModalTwo
                           actionButton={
                              <Button smallPadding={true} onClick={() => handleDelete(currentId)}>delete <i className='bx bxs-trash' ></i></Button>
                           }
                        >

                           <h1>{currentId}</h1>
                        </ModalTwo>
                     </div>

                     <h1 >{user.username}</h1>
                     <p>{user.location}</p>
                     <p>{user.id}</p>


                  </ProfileCardTextContainer>
               </ProfileCard>
            ))}
         </CardContainer>

         <h1>currentid : {currentId}</h1>
      </div>
   )
}

export default Crud
