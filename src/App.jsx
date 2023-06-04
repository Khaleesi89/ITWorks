import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {ShoppingCart} from './components/ShoppingCart/ShoppingCart';
import {ShoppingCartProvider} from './components/Contexts/ShoppingCartContext';
import {ItemList} from './components/ShoppingCart/ItemList';
import { Shopping } from './components/ShoppingCart/Shopping';
import {Home} from './components/Home/Home';









function App() {

    return(
            <ShoppingCartProvider>
        
            <Router>
                <Home/>
                <ShoppingCart/>
                <Routes>

                    <Route path='/' element ={<ItemList/>}></Route>
                    
                    <Route path='/cart' element = {<Shopping/>}></Route>
                </Routes>

                </Router>

                </ShoppingCartProvider>)




    }

export default App;

