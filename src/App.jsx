import { useState } from 'react'
import './app.css'
import './styles/global.css'

import Sidebar from './components/Sidebar'
import CharacterView from './components/CharacterView'

function App() {
    return (
        <div className='app'>
            <Sidebar />

            <main className="main-content">

                <CharacterView />

            </main>



        </div>
    )
}

export default App
