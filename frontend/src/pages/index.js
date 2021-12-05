import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Statistics } from '../components/dashboard/sales';
import { DashboardLayout } from '../components/dashboard-layout';

const axios = require('axios').default;
axios.defaults.baseURL = 'http://0.0.0.0:5000';


const Dashboard = () => (

  <>
    <Head>
      <title>
        Аналитика | WildHack Fish
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Statistics />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
