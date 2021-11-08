import './App.css';
import Lists from './Pages/Lists';
import UseState from './Pages/UseState';
import Destructuring from './Pages/Destructuring';
import { GlobalStyle, NavHeader, Page } from './utils/page';

import useLocalStorageState from 'use-local-storage-state';
import UseEffect from './Pages/UseEffect';
import Chevron from './Components/Chevron';
import Fetch from './Pages/Fetch';
import UseReducer from './Pages/UseReducer';
import Crud from './Pages/Crud';


function App() {

  const carouselNav = {
    display: 'flex',
    justifyContent: 'space-between'

  }

  const components = [
    <Lists />,
    <Destructuring />,
    <UseState />,
    <UseEffect />,
    <UseReducer />,
    <Fetch />,
    <Crud />
  ]
  const [index, setIndex] = useLocalStorageState("page index", 0)


  return (
    <>
      <div id="modal-bg"></div>
      <NavHeader>

        <div className="container" style={carouselNav}>

          <Chevron clickFunction={() => {
            index + 1 === 1 ?
              setIndex(index) :
              setIndex(index - 1)
          }}
          />
          <Chevron opposite clickFunction={() => {

            index + 1 === components.length ?
              setIndex(index)
              :
              setIndex(index + 1)
          }}
          />
        </div>
        <p style={{ color: '#ffffff81', textAlign: 'center', margin: '1em 0' }}>{index + 1} of {components.length}</p>
      </NavHeader>
      <Page style={{ position: 'relative', minHeight: '100vh' }}>






        {/* render component */}
        {components[index]}
      </Page>

      <GlobalStyle />

    </>

  )


}

export default App;
