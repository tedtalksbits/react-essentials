import styled, { createGlobalStyle } from "styled-components";
import { darkTheme } from "../data/themeData";


export const GlobalStyle = createGlobalStyle`

:root{
   --white: white;
   --bg: #050a1e;
}
   body{
      background: var(--bg);
      color: var(--white);
      /* position: relative; */

      
   }

`
export const Page = styled.section`

   
   display: grid;
   grid-template-columns: 1fr min(99ch, 100%) 1fr;
   padding: 1em;
   position: relative;
   
   &>*{
      grid-column: 2;
   }
   & > .full-bleed {
      width:100%;
      grid-column: 1 / 4;
   }

   ::after{
         content: '';
         height: 400px;
         position: absolute;
         width: 100%;
         /* background: linear-gradient(
0deg, rgb(255 0 176 / 8%) 0%, rgba(2,4,14,0) 46%); */
         background: linear-gradient(
0deg, #5400e621 0%, rgba(2,4,14,0) 46%);
         /* bottom: 0; */
         z-index: -100;
         bottom: 0;
      }

   

`

export const NavHeader = styled.header`

   display: grid;
   grid-template-columns: 1fr min(99ch, 100%) 1fr;
   padding: 1rem;
    &> *{
   grid-column: 2;
   }
   .full-bleed {
   width:100%;
   grid-column: 1 / 4;
   }


`