import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { DataProvider } from './components/Context/DataContext';
import {Home} from './components/Home/Home';
import { CartContent } from './components/CartContent/CartContent';


function App() {

    return(
        <div>
            <DataProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element ={<Home/>}></Route>
                        <Route path='/cart' element = {<CartContent/>}></Route>
                    </Routes>
                </BrowserRouter>
            </DataProvider>

            
            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element ={<Home/>}></Route>
                    <Route path='/cart' element = {<ShoppingCart/>}></Route>
                </Routes>
            </BrowserRouter> */}
            
            
        </div>
    )

}

export default App;


