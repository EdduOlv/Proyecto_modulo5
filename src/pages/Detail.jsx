import React from 'react'
import { useLocation } from 'react-router-dom'

export const Detail = () => {
  const { state } = useLocation();
  const book = state?.book
  console.log(book);

 
  return (
    <div>
      <h2>El titulo del producto es: {book.volumeInfo.title} </h2>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      <h4>Descripcion</h4>
      <p>{book.searchInfo.textSnippet}</p>
    </div>
  )
}
