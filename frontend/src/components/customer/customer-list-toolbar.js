
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
  Typography
} from '@mui/material';
import {  } from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';

const Input = styled('input')({
  display: 'none',
});

export const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1,
      
      }}
    >
      <Typography
        sx={{ m: 0 }}
        variant="h4"
      >
        Анализ данных
      </Typography>
      <Typography sx={{ mt: 1}} variant="h5">
        Загрузить новые данные
        </Typography>
      <Box sx={{ m: 1 }}>
        <label htmlFor="text-button-file">
            <Input onChange={(event)=> { 
               console.log(event)}} accept="image/*" id="text-button-file" multiple type="file" />
            <Button
              variant="text" component="span"
              startIcon={(<UploadIcon fontSize="small" />)}
              sx={{ mr: 1 }}
            >
              Import
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
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
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
    </Box>
  </Box>
);
