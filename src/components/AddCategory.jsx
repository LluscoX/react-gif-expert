import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
   
    const [inputValue, setinputValue] = useState('');


    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        //evitar que se recargue la pagina
        event.preventDefault();

        //condicional para ver que no se agregguen espacios a la lista
        if (inputValue.trim().length <= 1) return;

        //esta parte remplaza lo que se pone en la busqueda en la lista
        //setCategories(categories => [inputValue, ...categories])
        
        onNewCategory(inputValue.trim() );

        //Hace que el buscador se limpie
        setinputValue('');
        
    }

    return(    
        <form onSubmit={(event) => onSubmit(event)} >
            <input       
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}      
                onChange={ onInputChange }
            />
        </form>
    )
}