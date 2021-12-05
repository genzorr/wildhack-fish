import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { analyzed_sets, photos_per_set } from 'src/__mocks__/analysed_sets';
import { AnalyzedSetInfo } from 'src/components/set/analyzed-set-info';
import { AnalyzedSetResults } from 'src/components/set/analyzed-set-results';

const AnalyzedSet = () => (
  <>
    <Head>
      <title>
        Customers | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 5
      }}
    >
      <Container maxWidth={false}>
        <AnalyzedSetInfo />
        <Box sx={{ mt: 3 }}>
          <AnalyzedSetResults photos={photos_per_set} />
        </Box>
      </Container>
    </Box>
  </>
);

AnalyzedSet.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default AnalyzedSet;