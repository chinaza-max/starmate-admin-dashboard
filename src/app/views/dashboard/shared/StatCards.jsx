import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' }
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main }
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main
}));

const StatCards = () => {
  const cardList = [
    { name: 'No of Customers', amount: 3050, icon: 'person', color: 'rgb(255 250 0 / 81%)' },
    { name: 'No of Staffs', amount: 90, icon: 'people', color: 'rgb(255 250 0 / 81%)' },
    { name: 'No of Admin', amount: 3, icon: 'account_circle', color: 'rgb(255 250 0 / 81%)' },
    { name: 'No of Active Jobs', amount: 200, icon: 'alarm_on', color: '' },
    { name: 'No of Pending Jobs', amount: 10, icon: 'warning', color: 'rgb(255 0 0 / 79%)' },
    { name: 'No of Completed Jobs', amount: 1000, icon: 'check_circle', color: '#08ad6c' },
    { name: 'Pending Quote', amount: 10, icon: 'warning', color: '#08ad6c' }
  ];

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon style={{ color: item.color }} className="icon">
                {item.icon}
              </Icon>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading style={{ color: item.color }}>{item.amount}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
