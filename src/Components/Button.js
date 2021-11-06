import styled from 'styled-components'
import { darkTheme } from '../data/themeData'
export const Button = styled.button`
   color: ${darkTheme.primary};
   background: ${darkTheme.white};
   border: 1px ${darkTheme.white} solid;
   padding: .875em 2.2em;
   font-size: 1em;
   cursor: pointer;
   border-radius: 20px;
   margin: 2rem 0;

   :hover{
      background: ${darkTheme.primary};
      color: ${darkTheme.bg}
   }

`

