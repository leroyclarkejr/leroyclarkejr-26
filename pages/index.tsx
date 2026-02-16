import Layout from '../components/Layout';
import Image from 'next/image';
import avatarImage from './../public/leroyclarkejr.jpg';
import { Box, VStack, Text } from '@chakra-ui/react';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <VStack>
      <Box maxW={264} borderRadius={6}>
        <Image src={avatarImage} alt="Leroy Clarke Jr" priority className="profileImg" />
      </Box>
      <Text variant="display">Leroy Clarke Jr</Text>
    </VStack>
  </Layout>
);

export default IndexPage;
