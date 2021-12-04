
import { styled } from '@mui/system';

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

const Input = styled('input')({
  display: 'none',
});

export const CustomerListToolbar = (props) => (
  <Box {...props}>
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
        Анализ данных
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
    <Box sx={{ mt: 2 }}>
      <Card>
        <CardHeader title="Загрузка новых данных" subheader='Для начала работы нажмите "Загрузить"'>
        </CardHeader>
        <CardContent sx={{ mt: -7}}>

          <Box sx={{
            alignItems: 'center',
            display: 'flex',
            alignmentBaseline: 'baseline',
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}>

            <FolderIcon fontSize="small" sx={{
              height: 24,
              width: 24,
              marginRight: 1
            }}
            />
            <TextField id="standard-basic" label="Выбранный файл" variant="standard" />

            <label htmlFor="text-button-file">
              <Input onChange={(event) => {
                console.log(event)
              }} accept="image/*" id="text-button-file" multiple type="file" />
              <Button

                label="Выбранный файл"
                variant="text" component="span"
                startIcon={(<UploadIcon fontSize="small" />)}
                sx={{ mr: 1, marginTop: 2 }}
              >
                Import
              </Button>
            </label>
            {/* <TextField
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
            /> */}
          </Box>
        </CardContent>
      </Card>
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
);
