import { Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import { SimpleCard } from 'app/components';
import StatCards from './shared/StatCards';
import SimpleTable from './shared/SimpleTable';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' }
}));

const Analytics = () => {
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <StatCards />
            <div styled={{ height: '400px' }}>
              <SimpleCard title="Settlement">
                <SimpleTable />
              </SimpleCard>
            </div>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
