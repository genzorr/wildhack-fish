import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { analyzed_sets_const } from 'src/__mocks__/analysed_sets';
import { useState, useEffect } from 'react';
const axios = require('axios').default;
axios.defaults.baseURL = 'http://localhost:5000';

const exampleAnalyzedSet = {
  conf: 0.0,
  count: 0,
  date: "2021-12-05 12:11:41.457535",
  name: "test",
  path: "./images",
  status: "loaded"
}

const Customers = () => {

  const [analyzed_sets, updateAnalyzedSets] = useState([])

  const onDbRequiresReload = () => {
    axios
    .get("/datasets")
    .then((response) => {
      console.log(response)
      updateAnalyzedSets(response.data)
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
