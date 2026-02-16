import { defineRecipe } from '@chakra-ui/react';

export const textRecipe = defineRecipe({
  base: {
    fontFamily: 'inherit',
  },
  variants: {
    variant: {
      body: {
        fontSize: 'body',
        fontWeight: 'normal',
        color: 'text.body',
      },
      heading: {
        fontSize: 'heading',
        fontWeight: 'bold',
        color: 'text.heading',
      },
      display: {
        fontSize: 'display',
        fontWeight: 'bold',
        color: 'text.display',
      },
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
