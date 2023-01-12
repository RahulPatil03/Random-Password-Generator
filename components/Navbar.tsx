import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return <>
        <AppBar>
            <Toolbar>
                <Typography>Random Password Generator</Typography>
            </Toolbar>
        </AppBar>
        <Toolbar />
    </>
}
