import { useEffect, useState } from "react"

import { GifGridItem } from "./GifGridItem";
import { getGift } from "../helpers/GetGifs"

 export const GiftGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGift(category).then( newImages => setImages( newImages ));
  },[])
   return (
    <>
     <h4>{ category }</h4>
      <div className="card-grid">
        { images.map(({ id, title }) => <GifGridItem key={ id } title={ title }/> ) }
        {/* { images.map((image) => <li key={ image.id }>{image.title}</li> )} */}
      </div>
     
    </>
   )
 }

                  
 