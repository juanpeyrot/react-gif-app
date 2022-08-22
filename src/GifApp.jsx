import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = ( value ) => {
        if ( categories.includes( value ) ) return;
        setCategories( [value, ...categories] );
    }

    return (

        <>
        
        <h1>GifApp</h1>

        <AddCategory onNewCategory = { (value) => onAddCategory(value) } />

        {
            categories.map( category => (
                <GifGrid 
                key= { category }
                category= { category } 
                />
            ))
        }
        
        </>

       
    );

}