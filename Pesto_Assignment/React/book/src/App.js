import './App.css';
import Book from './components/book';
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState('Dark');
  const handleChangeTheme = () => {
    if (theme == 'Dark') {
      setTheme('Light');
    } else {
      setTheme('Dark');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={{ Theme: theme }}>
          <button onClick={handleChangeTheme}>Change Theme</button>
          <Book></Book>
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
