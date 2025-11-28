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
          What I Bring to OpenSesame
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
         <b>
          What strengths, skills, or perspectives will you bring to OpenSesame to make an impact and contribute to our mission?
         </b> <br/>

        <br/>I bring a combination of technical ability, problem-solving experience, and leadership skills. <br/>

        <br/> Through BUILD UMass and my two internships in high school for the Central Mass Moms company and the 
        Massachusetts Firefighting Academy, I have gained experience building websites and delivering real solutions for clients. 
        In BUILD UMass, I am helping to build a community-based bike trails database website using React, 
        Next.js, TypeScript, and MongoDB. For my internship at the Massachusetts Firefighting Academy, we created 
        content and a dedicated page on the MFA Website to inform youth about fire safety, careers in firefighting, 
        and youth programs, using some HTML and CSS. For the Central Mass Moms Company, we built a professional-looking 
        Western Mass Mom website from the ground up by collecting/addressing their needs. My interests go beyond web 
        development, as in the UMass Robotics Club, we are building a battlebot with integrated ESP32 control and a 
        motorized flipper mechanism using C++. <br/>
        
       <br/> On FRC Team 467, I led a subteam all four years of my high school, working 
        on vision, an arm ,and a climber, using Java and coordinating with mechanical and electrical subteams as well. 
        I have also shared my knowledge by teaching middle school students how to build and code Lego Robots through the 
        Sherwood Middle School After School Program and the Shrewsbury High School Robotics Summer Programs. <br/>

       <br/> Beyond technical ability, I bring leadership skills and persistence through my Eagle Project, and being event 
        lead for JCGB’s Walk for Hunger, where we raised $2000 for people with food insecurity, Norwood food drive where 
        we filled 3 car worths of food, JGCB Winter Clothing and Book Drive. I also ran a coding camp in which I taught 
        elementary and middle schoolers Scratch programming. <br/>
        
       <br/> Thus all of these experiences taught how to lead and 
        organize teams, communicate clearly, persistence, work in teams, time management, and adaptability. 
        They have taught me how to break down complex problems, collaborate across various different teams and 
        disciplines, stay organized under strict deadlines, and take initiative. Most importantly, they have also 
        prepared me to contribute efficiently to OpenSesame’s mission of developing the world’s most productive and 
        admired workforces by creating accessible, high quality learning tools. I am excited and ready to apply my 
        skills to improve the software that powers learning for thousands of organizations, helping individuals and 
        teams grow their skill and succeed. 
          
        </Typography>
      </Paper>
    </Container>
  );
}