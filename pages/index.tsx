import Layout from '../components/Layout';
import Image from 'next/image';
import avatarImage from './../public/leroyclarkejr.jpg';
import { Box, VStack, Text, Container, Link, HStack } from '@chakra-ui/react';
import { Linkedin, Instagram, Github, Apple, Mail } from 'lucide-react';
import constants from '@/constants';
import type { IconName } from '@/constants';

// Icon mapping utility
const iconMap: Record<IconName, React.ReactElement> = {
  instagram: <Instagram size={16} />,
  linkedin: <Linkedin size={16} />,
  github: <Github size={16} />,
  mail: <Mail size={16} />,
};

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text variant="subheading" fontSize="aux" mb={6} textTransform="capitalize">
    {children}
  </Text>
);

// const StatusBadge: React.FC<{ status: 'Beta' | 'Live' | 'In Development' }> = ({ status }) => {
//   const statusConfig = {
//     Beta: { label: 'Live Beta', bg: '#265ea2/30', borderColor: '#265ea2' },
//     Live: { label: 'Live', bg: '#22c55e/30', borderColor: '#22c55e' },
//     'In Development': { label: 'In Dev', bg: '#f59e0b/30', borderColor: '#f59e0b' },
//   };

//   const config = statusConfig[status];

//   return (
//     <Badge
//       bg={config.bg}
//       borderWidth={1}
//       borderColor={config.borderColor}
//       color="brand.white"
//       fontSize="10px"
//       fontFamily="heading"
//       fontWeight="600"
//       px={2}
//       py={0.5}
//       borderRadius="sm"
//       textTransform="uppercase"
//       letterSpacing="0.05em"
//     >
//       {config.label}
//     </Badge>
//   );
// };

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Container maxW="lg">
      <VStack alignItems="flex-start" gap={0} mb={10}>
        <Box maxW={120} borderRadius={8} overflow="hidden" mb={8}>
          <Image
            src={avatarImage}
            alt="Leroy Clarke Jr"
            priority
            width={120}
            height={120}
            className="profileImg"
          />
        </Box>
        <Text variant="display" mb={3}>
          Leroy Clarke Jr
        </Text>
        <Text fontSize="body" lineHeight="1.7" maxW="540px" mb={4}>
          Self-taught{' '}
          <Text as="span" fontWeight={700} color="text.heading">
            Product Engineer
          </Text>{' '}
          and Penn State Grad. I build software at{' '}
          <Text as="span" fontWeight={700} color="text.heading">
            The Farmers Dog
          </Text>{' '}
          and craft tools that help ambitious people turn vision their vision into reality.
        </Text>
        <Text fontSize="body" lineHeight="1.7" maxW="540px">
          When I'm away from the keyboard, I'm running far, lifting heavy, or exploring the
          intersection of tech and art.
        </Text>
      </VStack>

      <Box borderTop="1px solid" borderColor="border.subtle" pt={10} mb={10}>
        <SectionLabel>Selected Projects</SectionLabel>
        <VStack gap={8} alignItems="flex-start">
          {constants.projects
            .filter((project) => project.featured)
            .map((project) => (
              <Box key={project.id} width="100%">
                <HStack justifyContent="space-between" alignItems="center" mb={2}>
                  <HStack gap={3} alignItems="center">
                    <Text
                      fontFamily="heading"
                      fontWeight="600"
                      color="text.heading"
                      fontSize="subheading"
                    >
                      {project.title}
                    </Text>
                  </HStack>
                  <Text fontFamily="subheading" fontWeight={400} fontSize="aux" color="brand.body">
                    {project.date}
                  </Text>
                </HStack>
                {/* {project.status && <StatusBadge status={project.status}  />} */}
                <Text mb={3} maxW="540px">
                  {project.description}
                </Text>
                <Link
                  href={project.link.href}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  fontFamily="heading"
                  fontSize="aux"
                  fontWeight="600"
                  color="text.heading"
                  bg="bg.secondary"
                  border="1px solid"
                  borderColor="border.primary"
                  px={4}
                  py={2}
                  borderRadius="sm"
                  _hover={{ bg: 'brand.greyStrong', borderColor: 'border.subtle' }}
                  textDecoration="none"
                  transition="all 0.2s"
                >
                  <Apple size={16} />
                  Download for Mac
                </Link>
              </Box>
            ))}
        </VStack>
      </Box>

      <Box borderTop="1px solid" borderColor="border.subtle" pt={10}>
        <SectionLabel>Connect</SectionLabel>
        <HStack gap={5}>
          {constants.socials.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              color="text.body"
              _hover={{ color: 'text.heading' }}
              aria-label={link.name}
              transition="color 0.2s"
            >
              {iconMap[link.icon]}
            </Link>
          ))}
        </HStack>
      </Box>
    </Container>
  </Layout>
);

export default IndexPage;
