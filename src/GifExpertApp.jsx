import {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export default function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = ()=>{
    setCategories(['Valorant',...categories])
  }

  console.log()

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* imput */}
      <AddCategory setCategories={setCategories}/>

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



