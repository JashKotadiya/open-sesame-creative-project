import { Box, Typography, Grid, Card, CardActionArea, CardContent, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const theme = useTheme();
  // A box is a Div with extra features, and allows the quick application of spacing, layout, etc 
  return (
    <Box
      sx={{
        textAlign: "center",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: "100vh",
        px: 2,
        width: '100%', 
      }}
    >
      <Box sx={{ maxWidth: 'md', width: '100%', pt: 6, pb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3, color: 'text.primary' }}>
         OpenSesame Creative Project
        </Typography>

        <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary' }}>
          Introducing Jash Kotadiya and Answering your Core Internship Questions
        </Typography>

        {/* Grid container defines the table, enables flexbox rules, and allows for its children to wrap into rows, and automatically applies spacing -> A 12 column system */}
        <Grid container spacing={4} justifyContent="center">
          {/* Grid item represents one item in the Grid container */}
          <Grid item xs={12} sm={6} md={4}>
            {/* Display content within a contained elevated box */}
            <Card 
              elevation={4} 
              sx={{ 
                backgroundColor: theme.palette.primary.main, 
                color: '#fff', 
                height: "100%", 
                transition: "0.3s", 
                "&:hover": { 
                  transform: "translateY(-5px)",
                  // Darken the gold slightly on hover
                  backgroundColor: theme.palette.primary.light,
                  boxShadow: 8 
                } 
              }}
            >
              <CardActionArea component={Link} to="/journey">
              {/* The card action make any thing inside of it Interative, so we are using a Link component which is a advanced a href which allows for moving between pages without reloading the site */}
              {/* The card content is the main content of the card */}
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>My Journey</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    How OpenSesame fits into my career journey.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={4} 
               sx={{ 
                backgroundColor: theme.palette.primary.main, 
                color: '#fff', 
                height: "100%", 
                transition: "0.3s", 
                "&:hover": { 
                  transform: "translateY(-5px)",
                  backgroundColor: theme.palette.primary.light,
                  boxShadow: 8 
                } 
              }}
            >
              <CardActionArea component={Link} to="/impact">
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>Impact</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    What I bring to OpenSesame.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={4} 
             sx={{ 
                backgroundColor: theme.palette.primary.main, 
                color: '#fff', 
                height: "100%", 
                transition: "0.3s", 
                "&:hover": { 
                  transform: "translateY(-5px)",
                  backgroundColor: theme.palette.primary.light,
                  boxShadow: 8 
                } 
              }}
            >
              <CardActionArea component={Link} to="/future-ai">
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>AI, Learning and the Future</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    What excites me about AI & the future of learning.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}