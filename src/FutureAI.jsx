import { Container, Typography, Box, Paper, useTheme } from "@mui/material";

export default function FutureAI() {
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
         AI and the Future of Learning
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
         <b>What excites you most about working with AI, and how do you think it can shape the future of learning and work?
         </b> <br/>

         <br/>What excites me about working with AI is its ability to personalize learning and 
         problem solving at a scale that has never been possible before. 
         AI systems are able to adapt to each individual's skill level, background knowledge and 
         learning style, meaning that instead of forcing every learner to go through the same path, 
         AI can meet people exactly where they need help and grow them in a way that feels intuitive and 
         efficient for them. <br/>

         <br/> I have already seen an example of this while building my own small RAG system using Cohere’s 
         embedding and generation models. Even with my simple setup, users were able to upload their notes, 
         and instantly get customized explanations from their own material. 
         This shows how powerful AI can be when it is used to make information more easy to understand, 
         more accessible, and more relevant. 

         <br/>This is exactly why I am excited about OpenSesame, as their focus on improving the way organizations 
         train employees aligns perfectly with how I see AI transforming the future of work. 
         AI can help employees learn faster, fill skill gaps more effectively, 
         stay up to date in rapidly changing industries, and ultimately feel more 
         confident in their abilities. Therefore, I believe 
         AI has the potential to not only deliver better learning content but to also 
         help people discover what skills they need, how they learn the best, and how to continually improve. <br/>

        <br/> Hence, working with AI in a place like OpenSesame, where education, accessibility, 
        and real workplace impact come together, is exciting as it means contributing to technology that can 
        genuinely improve people’s opportunities, careers and day to day work and I want to help build tools 
        that make learning more personalized, engaging, and available to everyone. 
        </Typography>
      </Paper>
    </Container>
  );
}