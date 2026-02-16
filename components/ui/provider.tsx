'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/theme';
import { ColorModeProvider } from '@/src/components/ui/color-mode';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ColorModeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ColorModeProvider>
  );
}
