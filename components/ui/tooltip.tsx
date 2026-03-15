'use client';

import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react';
import React from 'react';

export interface TooltipProps extends ChakraTooltip.RootProps {
  content: React.ReactNode;
  children: React.ReactElement;
  portalled?: boolean;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const { children, content, portalled = true, ...rest } = props;

    const body = (
      <ChakraTooltip.Positioner>
        <ChakraTooltip.Content
          ref={ref}
          bg="brand.greyStrong"
          color="brand.white"
          fontSize="aux"
          fontFamily="body"
          px={3}
          py={2}
          borderRadius="sm"
          maxW="260px"
          lineHeight="1.5"
        >
          {content}
        </ChakraTooltip.Content>
      </ChakraTooltip.Positioner>
    );

    return (
      <ChakraTooltip.Root openDelay={100} closeDelay={100} {...rest}>
        <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
        {portalled ? <Portal>{body}</Portal> : body}
      </ChakraTooltip.Root>
    );
  },
);
