
import {BrowserRouter as Router , Routers , Route} from 'react-router-dom'
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Courses from './Pages/Courses';
import ContactUs from './Pages/ContactPage';
const App = () => {
  return(
   <Router>
    <Routers>
      <Route path="/Home"element={<Home/>}/>
      <Route path="/AboutPage"element={<AboutPage/>}/>
      <Route path="/Courses"element={<Courses/>}/>
      <Route path="/ContactUs"element={<ContactUs/>}/>
    </Routers>
   </Router>
   
  )
}
export default App;