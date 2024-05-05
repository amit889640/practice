import { useState } from 'react';
import './App.css';
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
  );
}

export default App;
