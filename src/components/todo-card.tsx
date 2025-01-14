import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTodo } from '../context/todo';
import { Chip, Grid2 } from '@mui/material';

export default function BasicCard() {
  const { todos: todoList } = useTodo();
  return (
    <>
      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        {todoList.map((todo, id) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {todo.id}
                </Typography>
                <Typography variant="h5" component="div">
                  {todo.todo}
                </Typography>
              </CardContent>
              <CardActions>
                {todo.completed ? (
                  <Chip label="Done" color="primary" />
                ) : (
                  <Chip label="Not Completed" color="error" />
                )}
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
