import { Box } from '@mui/material';
import { getSSRTranslation } from '@/locales/getSSRTranslation';

export default async function Home() {
  const t = await getSSRTranslation();
  // Simulate a delay for loading
  return (
    <Box color="secondary">
      <Box color="primary"> {t.common?.title} </Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
      <Box color="primary"> Test</Box>
    </Box>
  );
}
