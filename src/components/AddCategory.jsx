import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {
  
    const [inputValue, setinputValue] = useState();

    const OnInputChange = ({target}) => {
        setinputValue( target.value );
    };

    const OnSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewValue(inputValue.trim())
        setinputValue('');
    };

    return (
    <form onSubmit={ OnSubmit }>
        <input
            id="searchGift"
            type="text"
            placeholder="Buscar Gifs..."
            value={inputValue}
            onChange={ OnInputChange }
        />
    </form>
  )
}
