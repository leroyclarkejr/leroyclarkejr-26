import Layout from '../components/Layout';
import Image from 'next/image';
import avatarImage from './../public/leroyclarkejr.jpg';
import { Box, VStack, Text, Container, Link, HStack, Flex, Grid, GridItem } from '@chakra-ui/react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const ConnectLinkCompact: React.FC<{ href: string; label: string; icon: React.ReactNode }> = ({
  href,
  label,
  icon,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    px={4}
    py={3}
    border="1px solid"
    borderColor="border.primary"
    borderRadius="sm"
    color="text.body"
    transition="all 0.2s"
    _hover={{
      color: 'text.heading',
      borderColor: 'border.subtle',
      bg: 'bg.secondary',
    }}
    textDecoration="none"
  >
    <Text fontSize="aux" fontWeight="medium">
      {label}
    </Text>
    <Box color="brand.greyMedium" transition="colors 0.2s" _groupHover={{ color: 'text.body' }}>
      {icon}
    </Box>
  </Link>
);

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Container maxW="lg">
      <VStack alignItems="flex-start" gap={0} mb={10}>
        <Box maxW={600} borderRadius={6} mb="10">
          <Image src={avatarImage} alt="Leroy Clarke Jr" priority className="profileImg" />
        </Box>
        <Text variant="heading" mb={2}>
          Leroy Clarke Jr
        </Text>

        <Text mb={6}>
          Self-taught{' '}
          <Text as="span" fontWeight={700} color="brand.white" whiteSpace="nowrap">
            Product Engineer{' '}
            <Link
              href="https://posthog.com/blog/what-is-a-product-engineer"
              fontWeight={400}
              // fontStyle="italic"
              textDecoration="underline"
            >
              (what's that?)
            </Link>
          </Text>{' '}
          and Penn State Grad. I currently build software at{' '}
          <Text as="span" fontWeight={700} color="brand.white">
            The Farmers Dog
          </Text>{' '}
          and build tools the help ambitious individuals their vision in to reality.
        </Text>
        <Text>
          If I'm not at the keyboard I'm probably somewhere either running far, lifting heavy, or
          perculating some new fascination of the intersection of tech & art.
        </Text>
      </VStack>
      <VStack alignItems="flex-start" py={10}>
        <Text variant="subheading" fontSize="aux" mb={10}>
          -- Selected Projects
        </Text>

        <Box width="100%">
          <HStack justifyContent="space-between" mb={2}>
            <Text variant="heading" fontSize="body">
              Transcripted
            </Text>

            <Text variant="body" fontSize="body">
              Feb 2026
            </Text>
          </HStack>

          <Text>
            Transforming raw audio into structured, editorial-grade text. A tool for creators to
            manifest their voice across mediums.
          </Text>
        </Box>
      </VStack>

      <VStack alignItems="flex-start" py={10}>
        <Text variant="subHeading" fontSize="aux" mb={10}>
          -- Connect
        </Text>

        <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap={3} width="100%">
          <ConnectLinkCompact
            href="https://linkedin.com/in/leroyclarkejr"
            label="LinkedIn"
            icon={(<FaLinkedin size={14} />) as React.ReactElement}
          />
          <ConnectLinkCompact
            href="https://instagram.com/leroyclarkejr"
            label="Instagram"
            icon={(<FaInstagram size={14} />) as React.ReactElement}
          />
          <ConnectLinkCompact
            href="https://github.com/leroyclarkejr"
            label="Github"
            icon={(<FaGithub size={14} />) as React.ReactElement}
          />
          <ConnectLinkCompact
            href="mailto:hello@leroyclarkejr.com"
            label="Email Me"
            icon={(<IoMail size={14} />) as React.ReactElement}
          />
        </Grid>
      </VStack>
    </Container>
  </Layout>
);

export default IndexPage;
