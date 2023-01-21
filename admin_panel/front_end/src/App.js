import Nav from '../src/component/nav.js';
import Footer from './component/footer.js';
import SignUp from './component/pages/signup';
import Login from './component/pages/login'
import PrivateComponent from './component/privateComponent.js';
import List from './component/pages/list_item'
import UpdateProduct from './component/pages/update_product';
import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Additem from './component/pages/Additem.js';


function App() {
return (
  <>
   
    <BrowserRouter>
      <Nav />
      <Routes>   
        <Route element={<PrivateComponent/>}>
        <Route path="/list" element={<List/>}/>
        <Route path="/add" element={<Additem/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
      
  </Route> 
        <Route path="/" element={<h1>this is Home</h1>}/>
        <Route path="/Contact" element={<h1>this is Contact</h1>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Sign" element={<SignUp/>}/>
        <Route path="/err" element={<h1>please sign up please</h1>}/>
    </Routes>   

      <Footer />
    </BrowserRouter>

    
  </>
)
}

export default App;
