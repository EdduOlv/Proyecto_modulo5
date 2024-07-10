// import React, { useEffect, useState } from 'react'

// export const Book = () => {
//   const [books,setBooks] = useState (null)

//   useEffect(() => {
    
//     return () => {
      
//     }
//   }, [ ])
  
//   return (
//     <div>Book</div>
//   )
// }



// -----------------------------------------------------------

// import React, { useState, useEffect } from "react";

// export const Input = () => {
//   const [value, setValue] = useState("");
//   const [book, setBook] = useState(null);
//   const [update, setUpdate] = useState(false);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//     console.log(value)
//   };

//   const handleSearch = () => {
//     console.log("la busqueda a iniciado");
//     console.log(value);

//   };

  
//   useEffect(() => {
//    const apiUrl = "https://www.googleapis.com/books/v1/volumes?q="+value+"&key=AIzaSyCCx3Nfkt4VCEMidzgTBLViA6HGUb3sIO8"

//     if (update) {
//       // console.log("la busqueda es "+ value);
//       // fetch(apiUrl)
//       // .then((Response) => Response.json())
//       // .then((data) =>{
//       //   console.log("se llamo a la api");
//       //   setBook(data)
//       //   console.log(book.items[0].volumeInfo);
//       // })
//       // setUpdate(false)
//     }
//   }, [update])
//   return (
//     <div>
//       <h1>busca tu libro</h1>
//       <input
//           value={value}
//           onChange={handleChange}
//           onKeyDown={(event) => {
//           if (event.key === "Enter") {
//             setUpdate(!update)


//           }
//         }}
//       />
//     </div>
//   );
// };