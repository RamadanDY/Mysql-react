import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../style/style.css"


const Add = () => {
  const navigate = useNavigate()

  // thisis to take the values from the input 
   const [book, setbook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
   })

   const handleChange = (e) => {
    setbook((prev) => ({...prev,[e.target.name]: e.target.value}))
   }
   console.log(book)


   const handleClick = async (e) => {
    e.preventDefault()
    // alert('data sent')
    try{
      await axios.post('http://localhost:8000/book',book)
      navigate('/')


    }catch(err) {
      console.log(err)

    }
   }
  
  return (
    <div className="add-cover">
      <div className='Add'>
      <h3>Add book</h3>
      <input type="text"   onChange={handleChange}  name="title" placeholder="title" />
      <input type="text"  onChange={handleChange}  name="desc" placeholder="desc" />
      <input type="number"  onChange={handleChange} name="price" placeholder="price" />
      <input type="text" onChange={handleChange}  name="cover" placeholder="cover" />
      <button type="button" onClick={handleClick} >Send</button>
    </div>

    </div>
    
  )
}

export default Add