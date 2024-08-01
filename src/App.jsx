import './App.css';
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer.jsx'
import projects from './projects.js'


function App() {
    return (
        <>
        <main>
            <Header />
            <Navigation />
            <Outlet />
            <Footer />
        </main>
        </>
    );
}

export default App;