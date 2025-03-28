import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={scrollTrigger ? 1 : 0}
      sx={{ 
        backdropFilter: 'blur(10px)',
        backgroundColor: scrollTrigger ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.8)',
        py: { xs: 0.5, md: 1 },
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: '64px', md: '70px' } }}>
          <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            width="100%"
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="Jing Shi"
                sx={{
                  width: { xs: 50, md: 60 },
                  height: { xs: 50, md: 60 },
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'rotate(5deg)',
                  },
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header; 