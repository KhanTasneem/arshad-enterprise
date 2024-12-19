import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Image } from '../common/Image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
type IProps = {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    description: string;
}
export const ServiceCard: React.FC<IProps> = (props: IProps) => {
    const {imgSrc, imgAlt, heading, description} =props;
    return (
        <>
        <Paper sx={{p:2}}>
            <Box>
                <Image src={imgSrc} alt={imgAlt}/>
            </Box>
            <Typography sx={{fontWeight:"bold", fontSize:"22px", my: 1.5}} >{heading}</Typography>
            <Typography>{description}</Typography>
            <Box><Button variant="outlined" endIcon={<ArrowRightAltIcon/>}>Click Here</Button></Box>
        </Paper>
        </>
    )
}