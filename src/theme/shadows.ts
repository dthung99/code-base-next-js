// src/theme/shadows.ts
import { Shadows } from '@mui/material/styles';

// Function to create a shadow with custom values
function createShadow(
  umbra: string,
  penumbra: string,
  ambient: string,
): string {
  return [
    `${umbra} 0px 2px 4px -1px`,
    `${penumbra} 0px 4px 5px 0px`,
    `${ambient} 0px 1px 10px 0px`,
  ].join(',');
}

// Define custom shadows
const shadows: Shadows = [
  'none',
  // 1
  `0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)`,
  // 2
  `0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)`,
  // 3
  `0px 4px 6px -1px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)`,
  // 4
  `0px 10px 15px -3px rgba(0, 0, 0, 0.05), 0px 4px 6px -2px rgba(0, 0, 0, 0.1)`,
  // 5
  `0px 20px 25px -5px rgba(0, 0, 0, 0.05), 0px 10px 10px -5px rgba(0, 0, 0, 0.1)`,
  // ... continue with your custom shadows or use Material UI defaults
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
  createShadow('rgba(0,0,0,0.2)', 'rgba(0,0,0,0.14)', 'rgba(0,0,0,0.12)'),
] as Shadows;

export default shadows;
