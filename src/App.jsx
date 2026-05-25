import { useState } from 'react'
import './styles/global.css'
import './app.css'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <div className='app'>
            <Sidebar />

            <main className="main-content">

                <h1>Goosekeep</h1>

            </main>



        </div>
    )
}

export default App
