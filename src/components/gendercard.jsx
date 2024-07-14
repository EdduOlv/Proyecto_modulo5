import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const BookCard = ({ books }) => {
 
  const navigate = useNavigate()
  
  const handleClick = (book) => {
    console.log("log del handleClick");
    console.log(book.id);
    console.log("log del handleClick");
    navigate(`/Detail/${book.id}`, {state: { book } })
  }
  

  return (
    <>
      {books.map((book) => {

        return (
          
          <Card  key={book.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="thumbnail"
              height="140"
              src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.volumeInfo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Autor
              </Typography>
            </CardContent>
            <CardActions>
              <Button
              key={book.id}
              onClick={() => handleClick(book)}
              size="small">
                ir al detalle
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};
