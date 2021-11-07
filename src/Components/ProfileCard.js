import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../data/themeData'
import { Button } from './Button'

const Card = styled.div`
   border: 1px ${darkTheme.white} solid;
   padding: 1rem;
   border-radius: 20px;
   text-align: center;
   /* padding-top: 5rem; */
`
const Header = styled.div`
   position: relative;
   padding: 0 0 6rem;
`

const HeaderImg = styled.img`
   width: 100%;
   height: 10rem;
   border-radius: 1rem;
   object-fit: cover;
   position: absolute;
   left: 0;
   z-index: -29;
`
const Avatar = styled.img`
   border: 6px ${darkTheme.bg} solid;
   border-radius: 50%;
   width: 9.5rem;
   height: 9.5rem;
   object-fit: cover;

`

const Username = styled.h1`
  
  margin: .35rem 0;
  i{
     color: ${darkTheme.secondary};
     margin-left: .3rem;
  }
`
const BioText = styled.p`
   font-size: 1em;
   color: #ffffffaa;
   line-height: 1.6;
`

const Stats = styled.div`
   padding: 1.875rem .45rem;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   gap: .5rem;

`
const ProfileCard = ({ avatarUrl, username, bio, repos, followers, following, link }) => {
   return (
      <Card>
         <Header >
            <HeaderImg
               src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
               alt="gradient image"
            />
         </Header>
         <Avatar
            src={avatarUrl || "https://images.unsplash.com/photo-1588586948584-5bff0ace6f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}

         />
         <Username>{username || "CheckApi"}<i className='bx bxs-check-circle' ></i></Username>
         <BioText>{bio || "Seems we have no connection to the API 😭"}</BioText>

         <Stats className="stats">
            <div className="stat">
               <h1 className="stat__number">{following || 0}</h1>
               <p className="stat__text">Following</p>
            </div>
            <div className="stat">
               <h1 className="stat__number">{followers || 0}</h1>
               <p className="stat__text">Followers</p>
            </div>
            <div className="stat">
               <h1 className="stat__number">{repos || 0}</h1>
               <p className="stat__text">Repos</p>
            </div>
         </Stats>

         <Button href={link} >Subscribe</Button>


      </Card>
   )
}

export default ProfileCard
