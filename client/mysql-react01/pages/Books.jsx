import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
// import "../style/style.css"
// import './book.css'


const Books = () => {
    const [books, setbook] = useState([]);
    
    useEffect(() => {
        const fetchAllBooks = async (e)=> {
            try{
                const res = await axios.get("http://localhost:8000/books")
                setbook(res.data)
                // console.log(res.data)
            }catch(err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])

    const handleDelete = async  (id)=> {
        try {
            await axios.delete("http://localhost:8000/delete/" + id)
            window.location.reload();

        }catch(err) {
            console.log(err)

        }

    }

  return (
    <div className='books-cover' >
        <h1>Lama book shop</h1>
        <div className='books'>
            {
                books.map(book => (
                    <div className="book" key={book.id}>
                     {book.cover && <img src={book.cover} alt="" srcset="" /> }
                        <h2>{book.title}</h2>
                     <p>{book.desc}</p>
                     <span>{book.price}</span>
                     <button className="delete" onClick={()=> handleDelete(book.id)}>delete</button>
                     <button className="update"> <Link  to={`/update/${book.id}`} >Update</Link> </button>
                    </div>
                ))
            }
        </div>
         
        <button> <Link to="/add">Add new page</Link> </button>
    </div>
  )
}

export default Books


 