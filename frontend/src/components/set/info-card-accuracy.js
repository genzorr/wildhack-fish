import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';

export const InfoCardAccuracy = (props) => (
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
            0.8
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
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          2%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          За последний месяц
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
