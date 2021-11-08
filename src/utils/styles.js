export const input_file = {
   color: `${darkTheme.primary}`,
   background: `${darkTheme.white}`,
   border: '1px ${darkTheme.white} solid',
   padding: '.875em 2.2em',
   fontSize: '1em',
   cursor: 'pointer',
   borderRadius: `${({ paginator }) => paginator ? '' : b_radius}`,
   margin: '2rem 0',
   display: 'inline-block',
   transition: '.4s all ease'


}
// &.active{
//    background: ${darkTheme.primary};
//    color: ${darkTheme.bg};

// }
// &.active.first{
//    border-radius: 20px 0 0 20px;
// }
// &.active.last{
//    border-radius: 0 20px 20px 0;
// }

// :hover{
//    background: ${darkTheme.primary};
//    color: ${darkTheme.bg};

// }
