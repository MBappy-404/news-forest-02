import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { Grid } from '@mui/material';

const homePage = () => {



  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={8}>
          <LatestNews />
        </Grid>
        <Grid item sm={12} lg={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default homePage;