import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { useState, useEffect } from 'react';
const axios = require('axios').default;
axios.defaults.baseURL = 'http://localhost:5000';

const Customers = () => {

  const [analyzed_sets, updateAnalyzedSets] = useState([])


  const onDbRequiresReload = () => {
    axios
    .get("/datasets")
    .then((response) => {

      for (const value of response.data) {
        const valueDate = new Date(value.date);

        value.date = valueDate.toISOString();
        value.timestamp = valueDate.getTime();
      }

      updateAnalyzedSets(response.data.sort((a,b) => b.timestamp - a.timestamp))
    });
  }

  // // load the first time the page is opened
  useEffect(() => {
    onDbRequiresReload()
    return () => {
    }
  }, [])

  return (<>
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
        <CustomerListToolbar onDBUpdated={ () => { onDbRequiresReload() } } />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={analyzed_sets} />
        </Box>
      </Container>
    </Box>
  </>)
}

Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
