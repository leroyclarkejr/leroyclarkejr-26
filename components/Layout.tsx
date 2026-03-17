import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { Box, Container } from '@chakra-ui/react';
import { SITE_URL } from '@/lib/seo';

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  path?: string;
};

const Layout = ({ children, title, description, path }: Props) => (
  <Box minH="100vh" display="flex" flexDirection="column" className="dark">
    <NextSeo
      title={title}
      description={description}
      canonical={path ? `${SITE_URL}${path}` : undefined}
      {...(path === '/' ? { titleTemplate: '' } : {})}
    />

    <Container maxW="6xl" as="main" flex="1" py="8" px="6">
      {children}
    </Container>
  </Box>
);

export default Layout;
