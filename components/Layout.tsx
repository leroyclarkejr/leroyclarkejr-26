import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Box, Container, HStack, Text } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box as="header" bg="white" shadow="sm" borderBottom="1px" borderColor="gray.200">
      <Container maxW="6xl" py="4">
        <nav>
          <HStack gap="6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/users">Users List</Link>
            <a href="/api/users">Users API</a>
          </HStack>
        </nav>
      </Container>
    </Box>
    <Container maxW="6xl" as="main" flex="1" py="8">
      {children}
    </Container>
    <Box as="footer" bg="white" borderTop="1px" borderColor="gray.200" mt="auto">
      <Container maxW="6xl" py="6">
        <Text color="gray.600" textAlign="center" fontSize="sm">
          I'm here to stay (Footer)
        </Text>
      </Container>
    </Box>
  </Box>
);

export default Layout;
