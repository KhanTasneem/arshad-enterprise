import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';

export const BusinessSolution = () => {
    return (
        <Box className='main-container' my={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Grid container spacing={1.5} justifyContent="center">
                    <Grid item md={4}>
                        <SolutionItem icon={<ChatIcon />} heading='Consulting' description='we offer expert advice to improve business performance and efficiency.' />
                    </Grid>
                    <Grid item md={4}>
                        <SolutionItem icon={<SchoolIcon />} heading='Recruitment' description='Recruitment services match employers with candidates, streamlining hiring processes.' />
                    </Grid>
                    <Grid item md={4}>
                        <SolutionItem icon={<GroupsIcon />} heading='Training' description='We up-skill candidates for companies based on job requirements.' />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}
type IProps = {
    icon: React.ReactElement;
    heading: string;
    description: string;
}

const SolutionItem: React.FC<IProps> = (props) => {
    const { icon, heading, description } = props;
    return (
        <Stack direction="row" spacing={3}>
            <Paper sx={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 3 }}>
                {icon}
            </Paper>
            <Box>

                <Typography fontWeight="bold">{heading}</Typography>
                <Typography>{description}</Typography>
            </Box>
        </Stack>
    )
}
// const SOLUTION_DATA=[]