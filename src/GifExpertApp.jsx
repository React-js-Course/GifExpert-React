import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) =>{
    if( categories.includes(newCategory) ) return;
    setcategories([...categories, newCategory]);
  }

  return (
    <>
      {/* Title */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
          // setcategories={ setcategories }
          onNewValue={ (event) =>  onAddCategory(event)}
          // currentCategory={ categories }
        />
          {
            categories.map(categorySerch => (
                <GiftGrid key={ categorySerch } category={ categorySerch }/>    
              )
            )
          }

    </>
  )
}
