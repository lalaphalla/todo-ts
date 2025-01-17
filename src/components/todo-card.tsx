import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { useTodo } from '../context/todo';
import { Chip, Grid2 } from '@mui/material';
import { TodoType } from '../types/todo';
import { convertedDate } from '../utilities/convert-date';
import { DragEvent } from 'react';

export default function TodoCard({ id, todo, completed }: TodoType) {
  function dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', id);
    event.dataTransfer!.effectAllowed = 'move';
    // console.log(event);
  }
  function dragEndHandler() {
    console.log("DragEnd");
  }
  return (
    // <Grid2 size={{ xs: 12 }} key={id} width={'100%'}>
    <Grid2 size={{ xs: 12 }} key={id} width={'100%'} draggable onDragStart={dragStartHandler} onDragEnd={dragEndHandler}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {convertedDate(id)}
          </Typography>
          <Typography variant="h5" component="div">
            {todo}
          </Typography>
        </CardContent>
        <CardActions>
          {completed ? (
            <Chip label="Done" color="primary" />
          ) : (
            <Chip label="In progress" color="error" />
          )}
        </CardActions>
      </Card>
    </Grid2>
  );
}
