'use client';

import { DEFAULT_THEME, createTheme } from '@mantine/core';
import { figtree } from './font';

export const theme = createTheme({
  scale: 1.6,
  fontFamily: `${figtree.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  headings: {
    sizes: {
      h1: {
        fontSize: '3.2rem',
        lineHeight: '140%',
        fontWeight: '700',
      },
      h2: {
        fontSize: '2.4rem',
        lineHeight: '140%',
        fontWeight: '700',
      },
      h3: {
        fontSize: '2rem',
        lineHeight: '140%',
        fontWeight: '700',
      },
      h4: {
        fontSize: '1.6rem',
        lineHeight: '140%',
        fontWeight: '700',
      },
      h5: {
        fontSize: '1.4rem',
        lineHeight: '140%',
        fontWeight: '700',
      },
      h6: {
        fontSize: '1.4rem',
        lineHeight: '140%',
        fontWeight: '700',
      },
    },
  },
  colors: {
    primary: [
      '#FFE7D3',
      '#eee2de',
      '#e1c1b8',
      '#d49e8e',
      '#c9816b',
      '#c26e55',
      '#6A3120',
      '#a9543a',
      '#984a32',
      '#853e28',
    ],
    secondary: [
      '#E4FFDE',
      '#e4eee4',
      '#c3dbc5',
      '#a0c8a3',
      '#83b885',
      '#70ae73',
      '#3E7742',
      '#559458',
      '#49834c',
      '#3b723f',
    ],
    orange: [
      '#fff4e4',
      '#fde7d1',
      '#f6cda4',
      '#f1b173',
      '#ed9a4a',
      '#ea8c2f',
      '#E07A15',
      '#cf7113',
      '#b9630c',
      '#a25401',
    ],
    yellow: [
      '#fff8e0',
      '#ffeeca',
      '#ffdc99',
      '#ffc962',
      '#ffb836',
      '#ffae18',
      '#FFBA3B',
      '#e49300',
      '#ca8200',
      '#FFEFB8',
    ],
    'light-yellow': [
      '#FFFDDB',
      '#fff5d0',
      '#ffea9f',
      '#fede69',
      '#fed43f',
      '#fecd26',
      '#FFF0B9',
      '#e3b20d',
      '#c99e00',
      '#ae8800',
    ],
    error: [
      '#ffe8e7',
      '#ffd1ce',
      '#ffa29b',
      '#ff6f63',
      '#ff4536',
      '#ff2918',
      '#FF4637',
      '#e40900',
      '#cc0000',
      '#b20000',
    ],
    info: [
      '#e9f2ff',
      '#d4e2fd',
      '#a8c2f3',
      '#7ba0e9',
      '#5483e1',
      '#3b71dc',
      '#6690E4',
      '#1c57c3',
      '#114db0',
      '#00429c',
    ],
    neutral: [
      '#FFFFFF', //neutral.0
      '#fdfdfd', //neutral.1
      '#FAFAFA', //neutral.2
      '#F2F2F2', //neutral.3
      '#E0E0E0', //neutral.4
      '#B2B2B2', //neutral.5
      '#8B8B8B', //neutral.6
      '#595959', //neutral.7
      '#5D5D5D', //neutral.8
      '#454545', //neutral.9
      '#212121', //neutral.10
    ],
  },
  primaryColor: 'primary',
  breakpoints: {
    xs: '576px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
});
