import Layout from '../components/Layout';
import Image from 'next/image';
import avatarImage from './../public/leroyclarkejr.jpg';
import { Box, VStack, Text, Container, Link, HStack } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui/tooltip';
import { Linkedin, Instagram, Github, ArrowUpRight, Mail } from 'lucide-react';
import constants from '@/constants';
import type { IconName } from '@/constants';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

// Icon mapping utility
const iconMap: Record<IconName, React.ReactElement> = {
  instagram: <Instagram size={16} />,
  linkedin: <Linkedin size={16} />,
  github: <Github size={16} />,
  mail: <Mail size={16} />,
};

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text variant="subheading" fontFamily="subheading" fontSize="aux" mb={6} textTransform="capitalize">
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

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
};

const IndexPage = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: '-15%' });
  const projectsInView = useInView(projectsRef, { once: true, margin: '-15%' });
  const connectInView = useInView(connectRef, { once: true, amount: 0.1 });

  return (
    <Layout title="Leroy Clarke Jr — Digital Garden">
      <Container maxW="2xl">
        <motion.div
          ref={introRef}
          variants={staggerVariants}
          initial="hidden"
          animate={introInView ? 'visible' : 'hidden'}
        >
          <VStack alignItems="flex-start" gap={0} mb={10}>
            <motion.div variants={fadeUpVariants}>
              <Box maxW={320} borderRadius={8} overflow="hidden" mb={8}>
                <Image src={avatarImage} alt="Leroy Clarke Jr" priority className="profileImg" />
              </Box>
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <Text variant="display" mb={3}>
                Leroy Clarke Jr
              </Text>
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <Text fontSize="body" lineHeight="1.7" mb={4}>
                First gen Jamaican. 3x All-American gymnast. Penn State grad. I started my
                professional career in finance but soon taught myself to code because I'm a creative
                at heart. Currently a software engineer at{' '}
                <Text as="span" fontWeight={700} color="text.heading">
                  The Farmer's Dog
                </Text>
                .
              </Text>
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <Text fontSize="body" lineHeight="1.7">
                These days my athletic energy goes into half marathons (BK, Jersey City, Miami) and
                training for my first Hyrox. Outside of work I find myself in build mode because I
                can't help it. Currently fascinated with building tools that help ambitious people{' '}
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
            </motion.div>
          </VStack>
        </motion.div>

        <motion.div
          ref={projectsRef}
          variants={staggerVariants}
          initial="hidden"
          animate={projectsInView ? 'visible' : 'hidden'}
        >
          <Box borderTop="1px solid" borderColor="border.subtle" pt={10} mb={10}>
            <motion.div variants={fadeUpVariants}>
              <SectionLabel>Projects</SectionLabel>
            </motion.div>
            <VStack gap={8} alignItems="flex-start">
              {constants.projects
                .filter((project) => project.featured)
                .map((project) => (
                  <motion.div key={project.id} variants={fadeUpVariants} style={{ width: '100%' }}>
                    <Box width="100%">
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
                        <Text
                          fontFamily="subheading"
                          fontWeight={400}
                          fontSize="aux"
                          color="brand.body"
                        >
                          {project.date}
                        </Text>
                      </HStack>
                      {/* {project.status && <StatusBadge status={project.status}  />} */}
                      <Text mb={3} maxW="540px">
                        {project.description}
                      </Text>
                      <Link
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        display="inline-flex"
                        alignItems="center"
                        gap={1}
                        fontFamily="heading"
                        fontSize="aux"
                        fontWeight="600"
                        color="text.heading"
                        textDecoration="underline"
                        textUnderlineOffset="3px"
                        transition="all 0.2s"
                      >
                        View Project <ArrowUpRight size={14} />
                      </Link>
                    </Box>
                  </motion.div>
                ))}
            </VStack>
          </Box>
        </motion.div>

        <motion.div
          ref={connectRef}
          variants={staggerVariants}
          initial="hidden"
          animate={connectInView ? 'visible' : 'hidden'}
        >
          <Box borderTop="1px solid" borderColor="border.subtle" pt={10}>
            <motion.div variants={fadeUpVariants}>
              <SectionLabel>Connect</SectionLabel>
            </motion.div>
            <motion.div variants={fadeUpVariants}>
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
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
