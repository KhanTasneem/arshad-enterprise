import Typography from "@mui/material/Typography";
import { BoldHeading } from "./common/FormattingText";
import Grid from "@mui/material/Grid2";

export const StatSection = () => {
    return (
        <section className="stat-banner">
            <Grid container className="main-container">
                {
                    STAT_DATA.map((stat) => {
                        const { value, description } = stat;
                        return (
                            <Grid size={3} key={value} className="stat-item-container">
                                <BoldHeading>{value}</BoldHeading>
                                <Typography fontWeight="bold">{description}</Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </section>
    )
}
const STAT_DATA = [
    {
        "value": "15000 +",
        "description": "REGISTERED JOBSEEKERS"
    },
    {
        "value": "100 +",
        "description": "HAPPY CLIENTS"
    },
    {
        "value": "15000 +",
        "description": "JOBSEEKERS PLACED"
    },
    {
        "value": "30000 +",
        "description": "HOURS WORKED"
    }
]
