
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Courses from './Pages/Courses';
import ContactPage from './Pages/ContactPage';

const App = () => {
  return(
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutPage" element={<AboutPage/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/contactUs" element={<ContactPage/>}/>
    </Routes>
   </Router>
   
  )
}
export default App;