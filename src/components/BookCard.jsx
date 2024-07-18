import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),

  color: theme.palette.text.secondary,
}));

export const BookCard = ({ books, loading }) => {
  const navigate = useNavigate();
  const handleClick = (book) => {
    navigate(`/Detail/${book.id}`, { state: { book } });
  };

  return (
    <>
      {books && (
        <>
          {books.map((book) => {
              console.log(book);
            {
              if (book.volumeInfo.imageLinks) {
                return (
                  <Grid key={book.id} item xs={2} sm={4} md={4}>
                    <Grid container justifyContent="center">
                      <Item>
                        {loading && <span className="loader"></span>}
                        {books && !loading && (
                          <>
                            <CardMedia
                              sx={{ maxWidth: 200 }}
                              component="img"
                              src={
                                book.volumeInfo.imageLinks &&
                                book.volumeInfo.imageLinks.thumbnail
                              }
                            />
                            <CardContent sx={{ maxWidth: 120 }}>
                              <Typography
                                whiteSpace={"nowrap"}
                                overflow={"hidden"}
                              >
                                {book.volumeInfo.title}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button
                                key={book.id}
                                onClick={() => handleClick(book)}
                                size="medium"
                              >
                                ir al detalle
                              </Button>
                            </CardActions>
                          </>
                        )}
                      </Item>
                    </Grid>
                  </Grid>
                );
              }
            }
          })}
        </>
      )}
    </>
  );
};
