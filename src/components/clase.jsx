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

//PROFE ->>!

// import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
// import React, { useEffect, useState } from "react";
 
// // Importación duplicada de Typography eliminada
 
// export const BookCard = ({ foundBook }) => {
//   const [booksData, setBooksData] = useState([]);
 
//   useEffect(() => {
//     const fetchData = async () => {
//       const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(foundBook)}&key=AIzaSyCCx3Nfkt4VCEMidzgTBLViA6HGUb3sIO8`;
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setBooksData(data.items || []);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//         setBooksData([]);
//       }
//     };
 
//     if (foundBook) {
//       fetchData();
//     }
//   }, [foundBook]);
 
//   const handleShowDetails = (book) => {
//     console.log('Detalles del libro:', book);
//     // Aquí puedes expandir la funcionalidad, por ejemplo, abrir un modal con los detalles
//   };
 
//   return (
//     <>
//       {booksData.map((book, index) => (
//         <Card key={book.id || index} sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             alt={book.volumeInfo.title || 'Book image'}
//             height="140"
//             src={book.volumeInfo.imageLinks?.thumbnail || 'path/to/default/image.jpg'}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {book.volumeInfo.title}
//               {book.volumeInfo.authors}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {book.volumeInfo.description}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Share</Button>
//             <Button className='btn-book' variant="primary" onClick={() => handleShowDetails(book)}></Button>
//           </CardActions>
//         </Card>
//       ))}
//     </>
//   );
// };