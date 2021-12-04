import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Help = () => (
  <>
    <Head>
      <title>
        Помощь | WildHack Fish
      </title>
    </Head>
    <Typography>
        Здорова волки
    </Typography>
    {/* <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box> */}
  </>
);
Help.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Help;
