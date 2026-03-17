'use client';

import Layout from '../components/Layout';
import Image from 'next/image';
import avatarImage from './../public/leroyclarkejr.jpg';
import { Box, VStack, Text, Container, Link, HStack } from '@chakra-ui/react';
import { Linkedin, Instagram, Github, ArrowUpRight, Mail } from 'lucide-react';
import constants from '@/constants';
import type { IconName } from '@/constants';
import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ClientTooltip } from '@/components/ClientTooltip';

// Icon mapping utility
const iconMap: Record<IconName, React.ReactElement> = {
  instagram: <Instagram size={16} />,
  linkedin: <Linkedin size={16} />,
  github: <Github size={16} />,
  mail: <Mail size={16} />,
};

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
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' as const },
  },
};

const IndexPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const containerInView = useInView(containerRef, { once: true, margin: '-15%' });

  return (
    <Layout
      title="Leroy Clarke Jr — Product Engineer"
      description="I'm Leroy, a self-taught Software Engineer from Jersey City. Currently building tools for ambitious people."
      path="/"
    >
      <motion.div
        ref={containerRef}
        variants={staggerVariants}
        initial="hidden"
        animate={containerInView ? 'visible' : 'hidden'}
        suppressHydrationWarning
      >
        <Container maxW="2xl">
          <motion.div variants={fadeUpVariants}>
            <VStack alignItems="flex-start" gap={0} mb={10}>
              <Box maxW={{ base: 100, md: 320 }} borderRadius={8} overflow="hidden" mb={8}>
                <Image src={avatarImage} alt="Leroy Clarke Jr" priority className="profileImg" />
              </Box>

              <motion.h1 className="display-name">Leroy Clarke Jr</motion.h1>

              <motion.div variants={fadeUpVariants}>
                <Text fontSize="body" lineHeight="1.7" mb={4}>
                  First gen Jamaican. 3x All-American gymnast. Penn State grad. I started my
                  professional career in finance but soon taught myself to code because I'm a
                  creative at heart. Currently a{' '}
                  <Text as="span" fontWeight={700} color="text.heading">
                    Software Engineer
                  </Text>{' '}
                  at{' '}
                  <Text as="span" fontWeight={700} color="text.heading">
                    The Farmer's Dog
                  </Text>
                  .
                </Text>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Text fontSize="body" lineHeight="1.7">
                  These days my athletic energy goes into half marathons (BK, Jersey City, Miami)
                  and training for my first Hyrox. Outside of work I find myself in build mode
                  because I can't help it. Currently fascinated with building tools that help
                  ambitious people{' '}
                  <Text
                    as="span"
                    display="inline-flex"
                    alignItems="center"
                    gap={1}
                    whiteSpace="nowrap"
                    color="text.heading"
                    fontWeight={700}
                  >
                    be their own cause
                    <ClientTooltip open={tooltipOpen} onOpenChange={setTooltipOpen} />
                  </Text>
                  .
                </Text>
              </motion.div>
            </VStack>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <Box borderTop="1px solid" borderColor="border.subtle" pt={10} mb={10}>
              <motion.p className="section-label">Projects</motion.p>
              <VStack gap={8} alignItems="flex-start">
                {constants.projects
                  .filter((project) => project.featured)
                  .map((project) => (
                    <Box key={project.id} width="100%">
                      <HStack justifyContent="space-between" alignItems="center" mb={2}>
                        <motion.p className="project-title">{project.title}</motion.p>
                        <motion.p className="project-date">{project.date}</motion.p>
                      </HStack>
                      <motion.div className="">
                        <Text mb={2}>{project.description}</Text>
                      </motion.div>
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
                        transition="all 0.2s ease-out"
                        _active={{ transform: 'scale(0.97)' }}
                      >
                        View Project <ArrowUpRight size={14} />
                      </Link>
                    </Box>
                  ))}
              </VStack>
            </Box>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <Box borderTop="1px solid" borderColor="border.subtle" pt={10}>
              <motion.p className="section-label">Connect</motion.p>
              <HStack gap={5}>
                {constants.socials.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="text.body"
                    _hover={{ color: 'text.heading' }}
                    _active={{ transform: 'scale(0.92)' }}
                    aria-label={link.name}
                    transition="all 0.2s ease-out"
                  >
                    {iconMap[link.icon]}
                  </Link>
                ))}
              </HStack>
            </Box>
          </motion.div>
        </Container>
      </motion.div>
    </Layout>
  );
};

export default IndexPage;
