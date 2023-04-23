import { useEffect, useState } from "react"

import { GifGridItem } from "./GifGridItem";
import { getGift } from "../helpers/GetGifs"
import { useFetchGifs } from "../hook/useFetchGifs";

 export const GiftGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

   return (
    <>
     <h4>{ category }</h4>

     {
      isLoading && <h3>Cargando...</h3>
     }

      <div className="card-grid">
        { images.map((image) => <GifGridItem key={ image.id } { ...image } /> ) }
        {/* { images.map((image) => <li key={ image.id }>{image.title}</li> )} */}
      </div>
     
    </>
   )
 }

                  
 