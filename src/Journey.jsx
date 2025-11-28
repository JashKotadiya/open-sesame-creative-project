import { Container, Typography, Box, Paper, useTheme } from "@mui/material";

export default function Journey() {
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
          How do you see OpenSesame fitting into your career journey or long-term goals?
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
          I am interested in working with OpenSesame because it brings 
          together several things that I am genuinely passionate about: software engineering, 
          AI-driven learning tools, and building technology that impacts people at scale. Knowing that 
          OpenSesame powers an AI enabled marketplace of more than 60,000 skill building courses used by over 
          2,000 organizations, including many Global 2000 companies makes this opportunity especially 
          exciting to me as I want to contribute to technology that helps people develop real skills 
          and transform how they work. 

          My experiences in web development, robotics, and leadership align closely with the problems that 
          OpenSesame solves. Through BUILD UMass, I am helping to build full stack applications for non profit and 
          community organizations. Through my two internships in high school for the Massachusetts Firefighting Academy 
          and the Central Mass Moms company, I have built websites designed to educate and communicate information 
          clearly to specific audiences. In robotics, through both the UMass Robotics club and on Shrewsbury High School 
          Robotics Team FRC 467, I worked on software which directly connected to hardware under a strict and tight0
          deadline, which taught me how to iterate quickly, collaborate across disciplines, and build solutions under 
          real constraints. Thus, these experiences have cultivated the technical skills and user centered mindset that 
          directly supports the kind of accessible and impactful digital products OpenSesame strives to create. 

          Furthermore, I am also beginning to directly work with modern AI systems. Recently, 
          I built a simple Retrieval Augmented Generation system using Cohere’s embed-english-v3.0 and 
          command-a-03-2025 models. The project included a FastAPI backend that embeds uploaded text files 
          using Cohere’s embed models to power semantic search and then retrieves relevant context using cosine 
          similarity, and the answer is generated using Cohere’s command model. On the frontend I created a React 
          interface that allows users to upload text documents, ask questions, and receive answers sourced from 
          their own notes. Building this project deepened my understanding of how AI can personalize learning, 
          thus directly aligning with OpenSesame’s AI driven approach to skills based curation and content delivery. 

          Furthermore, my experience as an Eagle Scout has shaped how I approach software and engineering work. 
          Leading my Eagle Scout Project, where we planted shrubs at the India Society of Worcester to protect kids 
          from falling down a steep drop off, taught me how to manage a team, communicate clearly, and take ownership 
          of a project from planning to execution, which are skills that carry directly into software development. 
          I have learned to be organized, persistent, and to adapt based on the situation. 
          These leadership skills directly translate to OpenSesame’s collaborative environment where clear 
          communication, initiative and reliability are essential to delivering quality software which supports 
          millions of people worldwide. 

          Hence, overall OpenSesame aligns with both my technical interest and my long term goal of building 
          technology that helps people grow. The chance to work on AI powered learning tools, practice XP alongside 
          experienced engineers, contribute to production level projects and help improve a platform used by 
          organizations around the world makes this internship an ideal next step for me. I want to be part of a 
          team which is redefining workforce development and I am excited about the opportunity to bring my software 
          experience, leadership background, and passion for learning technology to OpenSesame’s mission.

          
        </Typography>
      </Paper>
    </Container>
  );
}