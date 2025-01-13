import { Box, Typography } from '@mui/material';

import goalImg from '../../assets/goals.jpg';
import Header from '../../components/todo/Header';
export default function TodoView() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f5f5f5', padding: 4 }}
    >
      <Header image={{ src: goalImg, alt: 'A list of golas' }}>
        <h1>Task List</h1>
      </Header>
      <Typography variant="body1" gutterBottom>
        This is a placeholder for the Todo Page.
      </Typography>
    </Box>
  );
}
