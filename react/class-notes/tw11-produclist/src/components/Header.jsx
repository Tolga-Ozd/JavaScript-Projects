import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


const Header = () => {
    const getCategories =()=>{
        
        const renkli =[
            "secondary",
            
        ]

        const [categories , setCategories] = useState();

        const C_URL ="https://fakestoreapi.com/products/categories";
        axios.get(C_URL).then((res)=>setCategories(res.data));
    };

    useEffect(()=>{
        getCategories()
    } , []);

    

  return (
    <div>
      <h1> Product List</h1>
      <div>
      <Button variant="primary">ALL</Button>{' '}
     

        {categories.map((item)=>{
            return(
                <Button variant="secondary">{item.toUpperCase()}</Button>
            
            )
        })}

      </div>
    </div>
  )
}

export default Header
