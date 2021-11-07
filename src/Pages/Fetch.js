import React, { useEffect, useState } from 'react'
import { Button } from '../Components/Button';
import ProfileCard from '../Components/ProfileCard';
import SearchBar from '../Components/SearchBar';
import styled from 'styled-components';
import { darkTheme } from '../data/themeData';

const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 2rem 0;
   gap: .5rem;

`

const FailedBox = styled.div`
   padding: 1rem;
   border-radius: 20px;
   border: 1px ${darkTheme.white} solid;
   background: #e0005229;
   margin: 1rem 0;
`
const Fetch = () => {

   const [user, setUser] = useState("tedtalksbits")
   const [data, setData] = useState([])
   const [search, setSearch] = useState("");
   const [isLoading, setIsLoading] = useState(true);

   const URL = `https://api.github.com/users/${user}`;
   const fetchData = async () => {
      const request = await fetch(URL, {
         method: 'GET'
      })
      const response = await request.json()
      console.log(response);
      setData(response)
      setIsLoading(false);
   }
   const handleChange = (e) => {

      setUser(e.target.value);
   }
   const handleSearch = () => {
      setSearch(user)
   }

   useEffect(() => {
      fetchData()
   }, [search])

   return (
      <div>
         <h1 style={{ marginBottom: '5rem' }}>Fetch</h1>

         {isLoading ? '...loading' :

            <>
               <SearchContainer>

                  <SearchBar
                     icon={<i className='bx bx-search'></i>}
                     placeholder="Search User"
                     handleChange={handleChange}
                  />
                  <Button onClick={handleSearch} style={{ margin: 0 }}><i className='bx bx-search'></i></Button>
               </SearchContainer>

               {data.bio ? '' : <FailedBox><h1>No User Found</h1> <p>{data.message}</p></FailedBox>}

               <ProfileCard
                  avatarUrl={data.avatar_url}
                  username={data.login}
                  bio={data.bio}
                  followers={data.followers}
                  following={data.following}
                  repos={data.public_repos}
                  link={data.html_url}

               />
            </>
         }
      </div>
   )
}

export default Fetch
