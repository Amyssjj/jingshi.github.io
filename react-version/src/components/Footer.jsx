import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';

function Footer() {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: { xs: 4, md: 5 },
        backgroundColor: 'rgba(249, 249, 249, 0.8)',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxWidth={isLaptop ? "lg" : "md"}>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            fontSize: '0.875rem',
            fontFamily: '"Poppins", sans-serif',
            textAlign: 'center',
          }}
        >
          © {currentYear} Jing Shi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 