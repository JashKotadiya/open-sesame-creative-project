import { Box, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 3, 
        mt: 'auto', 
        borderTop: `1px solid ${theme.palette.divider}`, 
        backgroundColor: theme.palette.background.default, 
        textAlign: 'center', 
      }}
    >
      <Typography 
        variant="body2" 
        color="text.secondary" 
      >
        © {new Date().getFullYear()} Your Name — OpenSesame Creative Project
      </Typography>
    </Box>
  );
}