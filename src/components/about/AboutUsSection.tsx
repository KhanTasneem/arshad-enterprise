import Grid from "@mui/material/Grid";
import { QuiltedImageList } from "../ImageList";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const AboutUsSection = () =>{
    return (
        <section className="main-container">
            <Grid container spacing={8}>
                <Grid item md={6}>
                    <QuiltedImageList/>
                </Grid>
                <Grid item md={6}>
                    <Stack spacing={2}>

                    <Typography variant="h3" fontWeight="bold">About Al-Asria Enterprises</Typography>
                    <Typography>Ms group of international specialized in providing unique solutions with more than 10 years of experience to help employees obtain jobs in major companies and institutions to achieve a qualitative leap in the daily operations and workflow within all departments, which contributes in increasing productivity,    so we offer comprehensive human resources solutions that are in line with the objectives of companies and businesses, and we develop them with the development of the times and the development of existing projects on the ground actually.</Typography>
                    <Box className="button-container">

                    <Button variant="contained">Contact Us</Button>
                    <Button variant="outlined" endIcon={<ArrowRightAltIcon/>}>More About Us</Button>
                    </Box>
                    </Stack>
                </Grid>
            </Grid>
        </section>
    )
}