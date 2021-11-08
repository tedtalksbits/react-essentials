import styled from 'styled-components'
import { darkTheme } from '../data/themeData'
import { b_radius } from '../utils/page'
export const Button = styled.a`
   color: ${props => props.hoverBg || darkTheme.primary};
   background: ${props => props.bg || darkTheme.white};
   border: 1px ${darkTheme.white} solid;
   padding: ${({ smallPadding }) => smallPadding ? '.45em 1.2em' : '.875em 2.2em'};
   font-size: 1em;
   cursor: pointer;
   border-radius: ${({ paginator }) => paginator ? '' : b_radius};
   margin:${({ smallPadding }) => smallPadding ? '0' : '.875em 2.2em'};
   display: ${({ smallPadding }) => smallPadding ? 'block' : 'inline-block'};
   transition: .4s all ease;
   text-align: center;

   &.active{
      background: ${props => props.hoverBg || darkTheme.primary};
      color: ${props => props.hoverColor || darkTheme.bg};

   }
   &.active.first{
      border-radius: 20px 0 0 20px;
   }
   &.active.last{
      border-radius: 0 20px 20px 0;
   }

   :hover{
      background: ${props => props.hoverBg || darkTheme.primary};
      color: ${props => props.hoverColor || darkTheme.bg};
      
   }

`

