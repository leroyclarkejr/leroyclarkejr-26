import { defineRecipe } from '@chakra-ui/react';

export const textRecipe = defineRecipe({
  base: {
    fontFamily: 'body',
  },
  variants: {
    variant: {
      body: {
        fontSize: 'body',
        fontWeight: 'normal',
        color: 'text.body',
        fontFamily: 'body',
        letterSpacing: 'normal',
        lineHeight: '1.5em',
      },
      heading: {
        fontSize: 'heading',
        fontWeight: 'bold',
        color: 'text.heading',
        fontFamily: 'heading',
        letterSpacing: 'tight',
      },
      subheading: {
        fontSize: 'subheading',
        fontWeight: 'bold',
        color: 'text.body',
        fontFamily: 'heading',
        letterSpacing: 'tight',
      },
      display: {
        fontSize: 'display',
        fontWeight: 'bold',
        color: 'text.display',
        fontFamily: 'display',
        letterSpacing: 'tight',
      },
      pixel: {
        fontFamily: 'var(--font-geist-pixel-grid)',
        fontWeight: 'normal',
        color: 'text.heading',
      },
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
