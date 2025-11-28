import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" sx = {{backgroundColor: "#1E1E1E"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          OpenSesame Creative Project
        </Typography>

        <div>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/journey">Journey</Button>
          <Button color="inherit" component={Link} to="/impact">Impact</Button>
          <Button color="inherit" component={Link} to="/future-ai">Future AI</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
