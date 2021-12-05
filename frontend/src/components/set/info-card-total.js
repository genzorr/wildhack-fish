import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import FishIcon from '../../icons/fish_icon'
import PropTypes from 'prop-types';

export const InfoCardTotal = (props) => {
  const {fishAmount} = props
  return (<Card {...props}>
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
            Динамика наблюдаемого количества рыб
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {fishAmount}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <FishIcon />
          </Avatar>
        </Grid>
      </Grid>
    
    </CardContent>
  </Card>)
}

InfoCardTotal.propTypes = {
  fishAmount: PropTypes.string
}
