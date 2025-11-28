import { Container, Typography, Box, Paper, useTheme } from "@mui/material";

export default function Impact() {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          gutterBottom
          sx={{ color: theme.palette.text.primary }} 
        >
          My Career Journey & OpenSesame
        </Typography>
      </Box>

      {/* Makes a elevated box around text, its bascially a non interative Card */}
      <Paper 
        elevation={1} 
        sx={{ 
          p: { xs: 3, sm: 5 }, 
          mb: 8, 
          borderRadius: 2, 
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            lineHeight: 1.7, 
            color: theme.palette.text.primary 
          }}
        >
          **Introduction:**
          My journey into AI began during my studies in [Your Field], where I realized the transformative potential of machine learning. The **OpenSesame Project** serves as a culmination of skills I've developed in [List 1-2 key skills, e.g., **Python**, **Data Analysis**, **React**].
          
          ---
          
          **Key Milestones:**
          
          * **Phase 1: Foundational Skills** – Completed projects focusing on [mention a foundational concept, e.g., data visualization and cleaning].
          * **Phase 2: Advanced Development** – Focused on building scalable, user-facing applications, demonstrated by this website's [mention a feature, e.g., responsive design and component architecture].
          * **Phase 3: OpenSesame** – This project specifically showcases my ability to [mention key skill, e.g., **integrate a full MUI theme**, **handle routing**, and **present complex information clearly**].
          
          ---
          
          **Alignment with Career Goals:**
          
          I am eager to contribute to [Company Name] because [mention 1-2 specific company goals]. My experience with modern frameworks and commitment to clean code, exemplified in this demo, aligns perfectly with the standards required for this internship.
          
        </Typography>
      </Paper>
    </Container>
  );
}