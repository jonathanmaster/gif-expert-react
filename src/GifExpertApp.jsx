import {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export default function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (newCategory)=>{
    if (categories.includes(newCategory)) return

    setCategories([newCategory,...categories])
  }

  console.log()

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* imput */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={event => onAddCategory(event)}
      />

      {/* listado de gi */}
      <ol>
        {categories.map((category)=>{
          return <li key={category}>{category}</li>
          })
        }
      </ol> 

    </>
  )
}



