import { useState } from "react";




export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();

        if ( inputValue.trim().length <1 ) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    
    }


    const onChange = ( { target } ) => {
        setInputValue( target.value );
    }



    return (

        <form onSubmit= { (ev) => onSubmit(ev)}>

            <input 
            type = "text"
            value = { inputValue }
            onChange = { (change) => onChange(change) }
            />

        </form>
    );

}