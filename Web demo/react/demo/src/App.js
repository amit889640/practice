import { useState } from 'react';
import './App.css';
<<<<<<< HEAD
function App() {
  return (

    <div className="App">
      This is reacts
    </div>
=======
import TodoList from './components/TodoList'
import { Provider } from 'react-redux';
import { store } from './store/store'
import Contact from './components/Contact';
function App() {
  return (
    <Provider store={store}>
      <>
        {/* <TodoList /> */}
        <Contact />
      </>
    </Provider>
>>>>>>> 004d31a18f8487451b267426e6eef16d72fb209f
  );
}

export default App;
