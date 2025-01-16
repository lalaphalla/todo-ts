import { Container, Stack } from '@mui/material';
import { ReactNode } from 'react';

type HomeLayoutProps = {
  children: ReactNode;
};

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Container maxWidth="xl">
      <Stack width={'100%'} direction={'row'}>
        {children}
      </Stack>
    </Container>
  );
}
