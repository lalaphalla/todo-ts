import { Card, CardContent, Checkbox, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { TodoType } from '../types/todo';



interface TodoListViewPropsComponent {
  todos: TodoType[];
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

export default function TodoListComponent({ todos, onDelete, onToggleComplete }: TodoListViewPropsComponent) {
  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Todo List
        </Typography>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <Checkbox
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
                color="primary"
              />
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed ? 'gray' : 'inherit',
                    }}
                  >
                    {todo.todo}
                  </Typography>
                }
              />
              <IconButton onClick={() => onDelete(todo.id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        {todos.length === 0 && (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', marginTop: 2 }}>
            No tasks to display.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
