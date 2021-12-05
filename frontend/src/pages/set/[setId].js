import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { analyzed_sets, photos_per_set } from 'src/__mocks__/analysed_sets';
import { AnalyzedSetInfo } from 'src/components/set/analyzed-set-info';
import { AnalyzedSetResults } from 'src/components/set/analyzed-set-results';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const axios = require('axios').default;
axios.defaults.baseURL = 'http://localhost:5000';

const AnalyzedSet = () => {
  const [datasetInfo, setDatasetInfo] = useState(null)
  const [datasetImages, setDatasetImages] = useState([])

  const router = useRouter()
  const currentDbName = router.asPath
  var arr =router.asPath.split('/');
  var dbName = decodeURIComponent(arr[arr.length - 1]);
  useEffect(() => {
    axios.get("/dataset", { params: { name: dbName } })
    .then((response) => {
      console.log("dataset data", response)
      setDatasetInfo(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get("/dataset/images", { params: {name: dbName}})
    .then((response) => {
      console.log("dataset images", response)
      setDatasetImages(response.data)
    })
  }, [])


  return (<>
    <Head>
      <title>
        Данные | Material Kit
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
        {(datasetInfo != null) ?  <AnalyzedSetInfo datasetAccuracy={datasetInfo.conf} datasetFishAmount={datasetInfo.count} datasetName={dbName}/> : <> </>}
       
        <Box sx={{ mt: 3 }}>
          <AnalyzedSetResults photos={datasetImages} />
        </Box>
      </Container>
    </Box>
  </>)
}

AnalyzedSet.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default AnalyzedSet;
