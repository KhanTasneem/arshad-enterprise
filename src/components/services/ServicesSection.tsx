import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { BoldHeading } from '../common/FormattingText';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
    return (
        <section className='main-container'>
            <Box mx={10}>
                <BoldHeading align="center">We Provide End to End Solution</BoldHeading>
                <Typography textAlign='center'>AAGA International Staffing Services is a leading end to end hr management company with a focus of executive search/recruitment/temporary staffing/recruitment process outsourcing.</Typography>
            </Box>
            <Grid container spacing={4}>
                {SERVICES_DATA.map((service) => {
                    const { imgSrc, imgAlt, heading, description } = service;
                    return (
                        <Grid item md={4} key={heading}>
                        <ServiceCard
                            imgSrc={imgSrc}
                            imgAlt={imgAlt}
                            heading={heading}
                            description={description}
                        />
                        </Grid>
                    )
                })}
            </Grid>
        </section>
    )
}
const SERVICES_DATA = [
    {
        "imgSrc": "https://alqaeedenterprises.com/wp-content/uploads/2024/07/2049.jpg",
        "imgAlt": "service - Overseas Recruitment",
        "heading": "Overseas Recruitment",
        "description": "We have good methods for recruiting candidates for both temporary jobs, permanent jobs and project-based assignments. Internationally certified solutions and extensive experience…"
    },
    {
        "imgSrc": "https://alqaeedenterprises.com/wp-content/uploads/2024/07/12704.jpg",
        "imgAlt": "service - Contractual Staffing",
        "heading": "Contractual Staffing",
        "description": "Contract Staffing is a great way to increase your workforce flexibility while minimizing cost and risk. Whether you need a scalable workforce for a big project, the ability…"
    },
    {
        "imgSrc": "https://alqaeedenterprises.com/wp-content/uploads/2024/07/2150751877.jpg",
        "imgAlt": "service - Outsourcing",
        "heading": "Outsourcing",
        "description": "Recruitment is a time consuming process which draws resources away from your business operation. In today’s fast-changing world, you cannot afford to waste time and resources…"
    }
]
