import Layout from '../components/Layout';
import Image from 'next/image';
import avatarImage from './../public/leroyclarkejr.jpg';
import { Box, VStack, Text, Container, Link, HStack } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui/tooltip';
import { Linkedin, Instagram, Github, Apple, Mail } from 'lucide-react';
import constants from '@/constants';
import type { IconName } from '@/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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

const IndexPage = () => {
  const introRef = useScrollReveal<HTMLDivElement>();
  const projectsRef = useScrollReveal<HTMLDivElement>();
  const connectRef = useScrollReveal<HTMLDivElement>();

  return (
  <Layout title="Leroy Clarke Jr — Digital Garden">
    <Container maxW="lg">
      <VStack ref={introRef} className="scroll-reveal" alignItems="flex-start" gap={0} mb={10}>
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
          First gen Jamaican. 3x All-American gymnast. Penn State grad. I started my professional
          career in finance but soon taught myself to code because I'm a creative at heart. Currently
          a software engineer at{' '}
          <Text as="span" fontWeight={700} color="text.heading">
            The Farmer's Dog
          </Text>
          .
        </Text>
        <Text fontSize="body" lineHeight="1.7" maxW="540px">
          These days my athletic energy goes into half marathons (BK, Jersey City, Miami) and
          training for my first Hyrox. Outside of work I find myself in build mode because I can't
          help it. Currently fascinated with building tools that help ambitious people{' '}
          <Tooltip content="Be the conscious driver of your life, not just an effect of your environment.">
            <Text
              as="span"
              textDecoration="underline"
              textDecorationStyle="dotted"
              textUnderlineOffset="3px"
              cursor="help"
              color="text.heading"
            >
              be their own cause
            </Text>
          </Tooltip>
          .
        </Text>
      </VStack>

      <Box ref={projectsRef} className="scroll-reveal delay-1" borderTop="1px solid" borderColor="border.subtle" pt={10} mb={10}>
        <SectionLabel>Projects</SectionLabel>
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

      <Box ref={connectRef} className="scroll-reveal delay-2" borderTop="1px solid" borderColor="border.subtle" pt={10}>
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
};

export default IndexPage;
