import React from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor'
import { darkTheme } from '../data/themeData'
const Destructuring = () => {
   const code = `

   // destructuring an array

   const [, item,] = ['chicken', 'pizza', 'lobster'];

   console.log(item); // chicken
   `
   const code2 = `

   // destructuring an object

   const cardData = [
      {
         image: 'https://robohash.org/pariaturporrorerum.png?size=200x200&set=set1',
         bg: '#8c1bf1',
         text: "Michelle"
      },
      {
         image: 'https://robohash.org/inventoremagnamconsequuntur.png?size=200x200&set=set1',
         bg: '#f766f8',
         text: "Hunter"
      },
      {
         image: 'https://robohash.org/accusantiumtemporibushic.png?size=200x200&set=set1',
         bg: '#f6f8bc',
         text: "Mike"
      },
      {
         image: 'https://robohash.org/nequeatea.png?size=200x200&set=set1',
         bg: '#f86868',
         text: "Tequan"
      }
   
   ]
   
   // extract bg values
   
   const bgs = cardData.map(({ bg }) => bg)
   
   console.log(bgs); // [ '#8c1bf1', '#f766f8', '#f6f8bc', '#f86868' ]
   `

   const code3 = `
   
   // using spread operator


   const cars = [
      {
         id: 1,
         make: "Hyundai",
         model: "Santa Fe",
         year: 2012,
         mileage: 54874
      }, {
         id: 2,
         make: "Chevrolet",
         model: "Malibu",
         year: 2001,
         mileage: 50019
      }, {
         id: 3,
         make: "Mitsubishi",
         model: "RVR",
         year: 1992,
         mileage: 604
      }
   
   ]
   
   const vans =
   {
      "id": 4,
      "make": "Mazda",
      "model": "Mazda6",
      "year": 2011,
      "mileage": 19891
   }
   
   
   
   const vehicles = [...cars, vans]
   
   console.log(vehicles)
   
   /************************** result
   
     [ { id: 1,
       make: 'Hyundai',
       model: 'Santa Fe',
       year: 2012,
       mileage: 54874 },
     { id: 2,
       make: 'Chevrolet',
       model: 'Malibu',
       year: 2001,
       mileage: 50019 },
     { id: 3,
       make: 'Mitsubishi',
       model: 'RVR',
       year: 1992,
       mileage: 604 },
     { id: 4,
       make: 'Mazda',
       model: 'Mazda6',
       year: 2011,
       mileage: 19891 }
      ]
   
   
   
    * **************************/
   `
   return (
      <div>
         <h1>Destructuring</h1>
         <CodeEditor
            value={code}
            language="js"
            placeholder="Please enter JS code."
            padding={15}
            style={{
               borderRadius: '12px',
               fontSize: '1em',
               margin: '3.2em 0',
               backgroundColor: `${darkTheme.white}`,
               fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
         />
         <CodeEditor
            value={code2}
            language="js"
            placeholder="Please enter JS code."
            padding={15}
            style={{
               borderRadius: '12px',
               fontSize: '1em',
               margin: '3.2em 0',
               backgroundColor: `${darkTheme.white}`,
               fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
         />
         <CodeEditor
            value={code3}
            language="js"
            placeholder="Please enter JS code."
            padding={15}
            style={{
               borderRadius: '12px',
               fontSize: '1em',
               margin: '3.2em 0',
               backgroundColor: `${darkTheme.white}`,
               fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
         />
      </div>
   )
}

export default Destructuring
