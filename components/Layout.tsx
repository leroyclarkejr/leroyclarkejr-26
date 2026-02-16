import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Box minH="100vh" display="flex" flexDirection="column" className="dark">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Container maxW="6xl" as="main" flex="1" py="8">
      {children}
    </Container>
  </Box>
);

export default Layout;
