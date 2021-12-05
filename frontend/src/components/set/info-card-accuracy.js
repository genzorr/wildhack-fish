import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import PropTypes from 'prop-types';

export const InfoCardAccuracy = (props) => {

  const {accuracy} = props

  return (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Динамика средней точности распознавания
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {accuracy.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>

    </CardContent>
  </Card>)
}

InfoCardAccuracy.propTypes = {
  accuracy: PropTypes.string
}
