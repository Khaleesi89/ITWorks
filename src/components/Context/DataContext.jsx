//SIN TERMINAR AUN..SE VERA SI SE LLEGA



import { createContext, useState , useEffect } from "react";
import axios from "axios";


export const dataContext = createContext();

export const DataProvider = ({children}) => {

    const[data, setData] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() =>{
        axios.get('http://localhost:3001/ofertas')
        .then(response => {
         // Manejar la respuesta de la solicitud
        setData(response.data);
        
        })
        .catch(error => {
        // Manejar el error de la solicitud
        console.log(error);
        });
        
    },[] );
    



    return (
        <dataContext.Provider value = {{data,cart,setCart}}>
            {children}
        </dataContext.Provider>
    )
};

