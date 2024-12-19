import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

export const Header = () => {

  return (
    <AppBar className='header-section' position="static" sx={{ background: "#3AAFA9" }}>
      <Container maxWidth="xl">
        {/* <Toolbar disableGutters className='main-container'> */}
        <Grid container justifyContent="space-between" alignItems="center" className='main-container' sx={{ py: 1 }}>
          <Grid size={4}>
            <Grid container spacing={2}>
              <Grid size={6}>
                <a href="tel:+0769461214">
                  <CallIcon />
                  <Typography>+91 7521 916 713</Typography>
                </a>
              </Grid>
              <Grid size={6}>
                <a href="mailto:khanarshad782@gmail.com">
                  <MailIcon />
                  <Typography>khanarshad782@gmail.com</Typography>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={4}>
            dusra kuch
          </Grid>
        </Grid>
        {/* </Toolbar> */}
      </Container>
    </AppBar>
  )
}