import { useState } from 'react';
import './App.css';
import PersonRegistration from './components/person-registration/PersonRegistration';
import PersonDetailCard from './components/person-detail-card/PersonDetailCard';
import Reducer from './components/reducerDemo/ReducerDemo';
import { ApiFetchDemo } from './components/ApiDemo/ApiFetchDemo';
import { ThemeChanger } from './components/ThemeChanger/ThemeChanger';
import { link, Route, Routes, BrowserRouter } from 'react-router-dom'
import HookDemo from './components/HookDemo/HookDemo';
import AgeInc from './components/CustomHook/AgeInc';
import TestDemo from './components/TestDemo/TestDemo';
import Counter from './components/Counter/Counter';



function App() {

  const getCallBack = (data) => {
    setDetails([...details, data])
  }
  const [details, setDetails] = useState([
    { Name: 'Amit', Age: 27, Mobile: 8896406311 },
    { Name: 'Sumit', Age: 24, Mobile: 8896406333 },
    { Name: 'Sumit', Age: 24, Mobile: 8896406333 },
    { Name: 'Sumit', Age: 24, Mobile: 8896406333 },
    { Name: 'Sumit', Age: 24, Mobile: 8896406333 },
    { Name: 'Sumit', Age: 24, Mobile: 8896406333 },
    { Name: 'Sumit', Age: 24, Mobile: 8896406333 },
    { Name: 'Sumit', Age: 24, Mobile: 8896406333 },
  ]);

  return (
    <div className="App">
      {/* Route demo start  */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/home'>
            <Route path='dsa' >
              <Route path='linkedlist' element={<h1>Linked List</h1>}></Route>
              <Route path='stack' element={<h1>Stack</h1>}></Route>
              <Route path='queue' element={<h1>Queue</h1>}></Route>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter> */}
      {/* Route demo end  */}


      {/* <div className='detail-main border'>
        <h1>Person Detail</h1>
      </div> */}
      {/* <PersonRegistration props={{ onSubmit: getCallBack }} /> */}
      {/* <PersonDetailCard props={details} /> */}
      {/* <Reducer /> */}
      {/* <ApiFetchDemo /> */}
      {/* <ThemeChanger /> */}
      {/* <HookDemo /> */}
      {/* <AgeInc /> */}
      <TestDemo />
      <Counter />
    </div>
  );
}

export default App;
