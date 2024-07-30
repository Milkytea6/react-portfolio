import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
    return (
        <section>
            <div className="header-app">
                <Header />
            </div>
            <div className="navigation-app">
                <Navigation />
            </div>
            <div className="Project-app">
                <Project />
            </div>
            <div className="footer-app">
                <Footer />
            </div>
        </section>
    );
}

export default App;