
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const SubHeader = () => {
    return (
        <>
            <AppBar position="sticky" color="primary" sx={{background: "#FFF", color: "#3AAFA9"}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        subheader
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}