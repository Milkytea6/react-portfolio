import './App.css';

import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

import projects from './projects'

function App() {
    return (
        <section className="main">
            <div className="container">
                <Header />
            </div>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <About />
            </div>
            <div className="container">
                <Portfolio projects={projects}/>
            </div>
            <div className="container">
                <Contact />
            </div>
            <div className="container">
                <Resume />
            </div>
            <div className="container">
                <Footer />
            </div>
        </section>
    );
}

export default App;