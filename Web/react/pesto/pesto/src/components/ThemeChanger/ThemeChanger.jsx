import React, { useState } from 'react'




export function ThemeChanger() {
    // if (isThemeDark) {
    //     import './ThemeDark.css';
    // }
    const [isThemeDark, setIsThemeDark] = useState(false);
    return (
        <div className='main'>
            <button onClick={() => { setIsThemeDark(!isThemeDark) }}>Change Theme</button>
            <div className='nav'>
                <nav>This is navigation bar</nav>
            </div>
            <header>ThemeChanger</header>
        </div>
    )
}
