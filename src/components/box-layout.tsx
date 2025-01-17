import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
type BoxLayoutProps = {
  status: string;
  children: ReactNode;
};
export default function BoxLayout({ status, children }: BoxLayoutProps) {
  return (
    <Box
      mx={2}
      sx={{
        padding: 2,
        border: '1px solid',
        borderColor: status === 'Completed' ? 'primary.main' : 'error.main',
        borderRadius: 2,
        marginBottom: 2,
        overflow: 'hidden', // Ensure items stay within the box
        position: 'relative', // Required for bounding the draggable area
        height: '90%', // Example height for the box
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {status}
      </Typography>
      {children}
    </Box>
  );
}
