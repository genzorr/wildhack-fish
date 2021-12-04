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
    <Box sx = {{ paddingLeft: 4 }}>
      <Box sx = {{ paddingBottom: 1 }}>
      <h1>Навигация по сайту</h1>
      </Box>

      <Box sx = {{ paddingBottom: 3 }}>
      <li><i>Аналитика</i></li>
      <p>
        Этот раздел посвящен визуализации данных: на нём вы можете обнаружить различные графики
        и показатели<br></br>связанные с подсчетом проплывавшей через окно рыбы.
      </p>
      </Box>
      <li><i>Загруженные выборки</i></li>
      <p>
        Здесь находится архив ваших загруженных датасетов с фотографиями. Можно также загрузить и новый.

      <Box sx = {{ paddingTop: 3 }}>
      <h1>Загрузка датасета на сайт</h1>
        <p>
          1) Подготовьте датасет: для этого вам необходимо сохранить все свои фотографии в одну папку.<br></br>
          2) Далее, перейдите в раздел &quot;Загруженные выборки&quot; и нажмите на кнопку &quot;Импорт&quot;<br></br>
          3) Выберите нужную папку и нажмите на нее
        </p>
      </Box>
      </p>
    </Box>
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
