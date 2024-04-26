import { useEffect, useState } from 'react';
import './App.css';
// import { Provider } from 'react-redux';
// import { store } from './stor1e';
// import Todo from './Todo';



function App() {

  const [time, setTime] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 2000);
    // a{
    //   nm
    // }

    garbageCollector
    // if (time == 20) {
    //   return () => {
    //     timer()
    //   }
    // }
  }, [time])


  return (
    // <Provider store={store}>
    <div className="App">
      <p>{time}</p>
    </div>
    // </Provider>
  );
}

export default App;
