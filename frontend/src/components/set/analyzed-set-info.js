
import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Stack,
  IconButton,
  SvgIcon,
  InputAdornment,
  Typography,
  CardHeader,
  CssBaseline
} from '@mui/material';
import { } from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import FolderIcon from '../../icons/folder';
import { useRouter } from 'next/router';
import { InfoCardTotal } from './info-card-total';
import { InfoCardAccuracy } from './info-card-accuracy';
import PropTypes from 'prop-types';

const Input = styled('input')({
  display: 'none',
});

export const AnalyzedSetInfo = (props) => {
  const router = useRouter()
  const {datasetAccuracy, datasetFishAmount, datasetName} = props
  console.log(datasetAccuracy, datasetFishAmount)
  return (<Container maxWidth={false}>

    <Typography
      sx={{ m: 0 }}
      variant="h4"
    >
      Датасет: {datasetName}
    </Typography>
    <Grid
      sx={{ mt: 2 }}
      container
      spacing={3}
    >
      <Grid
        item
        lg={3}
        sm={6}
        xl={3}
        xs={12}
        sx={{ paddingLeft: 0 }}
      >
        <InfoCardAccuracy accuracy={datasetAccuracy} />
      </Grid>
      <Grid
        item
        xl={3}
        lg={3}
        sm={6}
        xs={12}
        sx={{ px: 0 }}
      >
        <InfoCardTotal fishAmount={datasetFishAmount} />
      </Grid>
    </Grid>
  </Container>)

  return <Box {...props}>
    <Box
      sx={{
        alignItems: 'baseline',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <Typography
        sx={{ m: 0 }}
        variant="h4"
      >
        Датасет номер {router.asPath}
      </Typography>
      {/* <Typography sx={{ mt: 0 }} variant="h5">
        Загрузить новые данные
      </Typography> */}
      {/* <Box sx={{ m: 1 }}>
        <label htmlFor="text-button-file">
          <Input onChange={(event) => {
            const file = event.target.files[0]
            const path = (window.URL || window.webkitURL).createObjectURL(file);

            console.log(event)
            console.log(path)
          }} accept="image/*" id="text-button-file" multiple type="file" />
          <Button
            variant="text" component="span"
            startIcon={(<UploadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Загрузить
          </Button>
        </label>
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          Анализ данных
        </Button>
      </Box> */}
    </Box>
    <Box sx={{ marginTop: 2 }}>
      <InfoCardTotal />
    </Box>

    <Box sx={{ marginTop: 2 }}>
      <InfoCardAccuracy />
    </Box>
    {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box> */}
  </Box>
};


AnalyzedSetInfo.propTypes = {
  datasetAccuracy: PropTypes.string,
  datasetFishAmount : PropTypes.string,
  datasetName : PropTypes.string
}