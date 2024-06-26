
import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['']);
  
  const onAddCategory = (NewCategory) =>{  

    if(categories.includes(NewCategory)) return;
    //...categories Es para crear como una copia del anterior arreglo
    setCategories( [ NewCategory ,...categories ] )
    //categories.push(['hola']);
  }


  return (
    <>
      <h1> Titulo </h1>

      <AddCategory 
          onNewCategory={(value) => onAddCategory(value)}
          
      />

      
      {
        categories.map( (category) => (
            <GifGrid 
            key = {category} 
            category={category} />
          )
          
        )
      }
    

    </>
  )
}

