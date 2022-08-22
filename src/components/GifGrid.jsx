import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { LoadingMessage } from "./LoadingMessage";

export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category );
    console.log(isLoading);
    

    return (

        <>
            <h2>{ category }</h2>
            
            <LoadingMessage isLoading = { isLoading } />

            <div className="card-grid">
            {
                images.map( ( { id, title, url } ) => (
                    <GifItem 
                    key={ id }
                    title={ title }
                    url={ url } 
                    />
                ))
            }
            </div>
        </>
        
    )

}