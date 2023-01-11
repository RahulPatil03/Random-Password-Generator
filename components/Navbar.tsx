import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return <>
        <AppBar>
            <Toolbar>
                <Typography flexGrow={1}>Random Password Generator</Typography>
                <Button>Login</Button>
            </Toolbar>
        </AppBar>
        <Toolbar />
    </>
}
