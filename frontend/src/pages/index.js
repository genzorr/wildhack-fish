import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Statistics } from '../components/dashboard/sales';
import { DashboardLayout } from '../components/dashboard-layout';
import { ConfChart } from '../components/dashboard/confChart';

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
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <ConfChart />
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
