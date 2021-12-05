
import { flexbox, styled } from '@mui/system';
import { Container, Grid } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import { Collapse } from '@mui/material';
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
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LoadingCart } from './loading-cart';
import { Grow } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

const AnimatingBoi = (props) => {
  const {show} = props
  console.log(`AnimatingBoi ${show}`)
  return (<Grow in={show} >
    {show &&
    <Grid sx={{ marginTop: "16px" }} item
      lg={3}
      sm={6}
      xl={3}
      xs={12}
    >
      <LoadingCart />
    </Grid>}
        </Grow>)
}
AnimatingBoi.props = {
  show : PropTypes.bool
}

export const CustomerListToolbar = (props) => {
  const { onFileImport, isInLoadingState } = props

  const [fileString, setFileString] = useState(null)
  const onImportEnterClick = (e) => {
    if (e.keyCode == 13) {
      console.log('value', e.target.value);

      // TODO send to server this stuff
    }
  }

  const [show, setShow] = useState(isInLoadingState)

  useEffect(() => {
    setTimeout(() => {
      if (show) {
        return
      }
      setShow(true)

    }, 5000)
    return () => { clearTimeout()}

  }, [show])

  return (<Box {...props}>
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
        <CardHeader title="Загрузка новых данных" subheader='Для начала работы нажмите "Загрузить" или введите путь до папки с файлами'>
        </CardHeader>
        <CardContent sx={{ mt: -7 }}>
          {/* {zalupaWidget()} */}
          <Box sx={{
            alignItems: 'center',
            display: 'flex',
            alignmentBaseline: 'baseline',
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}>

            <Box sx={{ marginTop: "16px", marginRight: "12px" }}>
              <FolderIcon fontSize="small" sx={{
                height: 24,
                width: 24,
                marginRight: 1
              }}
              />
            </Box>


            <TextField sx={{
              minWidth: "40%", maxLines: 2,
              maxWidth: "80%", wordWrap: "true", flexWrap: "true",
            }} id="standard-basic" label="Выбранная папка" value={fileString} variant="standard" onKeyDown={onImportEnterClick} onChange={(e) => { setFileString(e.target.value) }} />

            <label htmlFor="text-button-file">
              <Input onChange={(event) => {
                console.log(event)
              }} accept="image/*" id="text-button-file" multiple type="file" webkitdirectory='true' />
              <Button

                label="Выбранный файл"
                variant="text" component="span"
                startIcon={(<UploadIcon fontSize="small" />)}
                sx={{ mr: 1, marginTop: 2, marginLeft: "16px" }}
              >
                Загрузка
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

      {console.log(`loading card should be visible : ${show}`)}
      {/* <TransitionGroup> */}

      {show ?  <AnimatingBoi show={show} /> : <> </>}       
      {/* <flexbox >
      <Grow in={show} >
        {show &&
        <Grid sx={{ marginTop: "16px" }} item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <LoadingCart />
        </Grid>}
            </Grow>

        </flexbox> */}
        {/* </TransitionGroup> */}

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
  </Box>)
}

CustomerListToolbar.propTypes = {
  onFileImport: PropTypes.func,
  isInLoadingState: PropTypes.bool.isRequired
}

CustomerListToolbar.defaultProps = {
  isInLoadingState: false
};
