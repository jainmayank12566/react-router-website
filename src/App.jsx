import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Github from './components/Github';
import User from './components/User';
import {Routes,Route} from 'react-router-dom';
function App(){
    return(
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/github' element={<Github />}/>
                <Route path='/user/:userid' element={<User />}/>
            </Routes>
            <Footer />
        </div>
    )
}
export default App;