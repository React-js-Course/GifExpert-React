import { useEffect } from "react"
import { getGift } from "../helpers/GetGifs"

 export const GiftGrid = ({ category }) => {

  useEffect(() => {
    getGift(category)
  },[])
  

   return (
    <>
     <h3>{ category }</h3>
    </>
   )
 }

                  
 