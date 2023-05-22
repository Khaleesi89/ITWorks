import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from './components/Home/Home';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';


function App() {

    return(
        <div>
            <BrowserRouter>

                <Routes>

                    <Route path='/' element ={<Home/>}></Route>
                    <Route path='/cart' element = {<ShoppingCart/>}></Route>
                </Routes>

            </BrowserRouter>
            
        </div>
    )

}

export default App;


