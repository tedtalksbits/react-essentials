const [, item,] = ['chicken', 'pizza', 'lobster'];

console.log(item); // chicken


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



const moreCars = [...cars, vans]

console.log(moreCars)

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
