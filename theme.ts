import { createSystem, defaultConfig } from '@chakra-ui/react';
import { textRecipe } from './components/recipes';

// Create config without defineConfig to test if that's causing issues
const customConfig = {
  globalCss: {
    body: {
      fontSize: '16px',
      background: 'brand.black',
      fontFamily: 'body',
    },
  },
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    tokens: {
      colors: {
        brand: {
          primary: { value: '#38A0CC' },
          black: { value: '1f1f1f' },
          white: { value: '#FFFFFC' },
          blue: { value: '#38A0CC' },
          green: { value: '#2BA07A' },
          red: { value: '#D6544B' },
          yellow: { value: '#EFDF60' },
          greyStrong: { value: '#27272A' },
          greyMedium: { value: '#52525B' },
          greyLight: { value: '#b3b3b4' },
          greySoft: { value: '#E4E4E7' },
        },
      },
      fontSizes: {
        aux: { value: '14px' },
        body: { value: '16px' },
        heading: { value: '24px' },
        subheading: { value: '18px' },
        display: { value: '32px' },
      },
      fonts: {
        heading: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
        subheading: { value: 'var(--font-geist-mono), system-ui, sans-serif' },
        display: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
        body: { value: 'var(--font-newsreader), Georgia, serif' },
        pixel: { value: 'var(--font-geist-pixel-grid), Georgia, serif' },
      },
      letterSpacings: {
        tight: { value: '-0.04em' },
        normal: { value: '0' },
      },
      spacing: {
        2: { value: '0.5rem' },
        4: { value: '1rem' },
        8: { value: '2rem' },
      },
      radii: {
        default: { value: '8px' },
      },
    },
    recipes: {
      text: textRecipe,
    },

    semanticTokens: {
      colors: {
        // Background colors that change based on color mode
        bg: {
          primary: {
            value: { base: 'brand.white', _dark: 'brand.black' },
          },
          secondary: {
            value: { base: 'brand.greySoft', _dark: 'brand.greyStrong' },
          },
          card: {
            value: { base: '#FFFFFF', _dark: '#1A1A1A' },
          },
        },
        // Text colors that adapt to color mode
        text: {
          heading: {
            value: {
              base: '{colors.brand.black}',
              _dark: '{colors.brand.white}',
            },
          },
          subheading: {
            value: {
              base: '{colors.brand.black}',
              _dark: '{colors.brand.white}',
            },
          },
          body: {
            value: {
              base: '{colors.brand.greyMedium}',
              _dark: '{colors.brand.greyLight}',
            },
          },
          display: {
            value: {
              base: '{colors.brand.black}',
              _dark: '{colors.brand.white}',
            },
          },
        },
        // Border colors
        border: {
          primary: {
            value: {
              base: '{colors.brand.greySoft}',
              _dark: '{colors.brand.greyMedium}',
            },
          },
          subtle: {
            value: {
              base: '{colors.brand.greyLight}',
              _dark: '{colors.brand.greyStrong}',
            },
          },
        },
      },
    },
  },
};

// Merge config with defaultConfig - custom recipes should override defaults
// The second argument to createSystem overrides the first, so our button recipe should take precedence
export const system = createSystem(defaultConfig, customConfig);
