import Box from "@mui/material/Box";
import DeskBanner from "../../assets/images/desktopBanner.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Banner = () => {
    return (
        <>
        <Box className="desktop-banner">
            <img src={DeskBanner} className="img-fluid" alt="desktop banner" />
            <Stack className="desktop-content" spacing={3}>
                <Typography>We make Visa easy</Typography>
                <Typography variant="h2">Welcome to Al Qaeed Enterprises</Typography>
                <Stack direction="row" gap={3}>
                <Button variant="contained" endIcon={<ArrowRightAltIcon />} sx={{color: "#FFF"}}>Read More</Button>
                <Button variant="outlined" endIcon={<ArrowRightAltIcon />} sx={{color: "#3AAFA9"}}>Contact Us</Button>
                </Stack>
            </Stack>
        </Box>
        </>
    )
}