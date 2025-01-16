import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
type BoxLayoutProps = {
  status: string;
  children: ReactNode;
};
export default function BoxLayout({ status, children }: BoxLayoutProps) {
  return (
    <>
      <Stack>
        <Typography variant='h6' pl={2}>{status}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            minHeight: '90%',
          },
        }}
      >
        {children}
      </Box>
      </Stack>
    </>
  );
}
