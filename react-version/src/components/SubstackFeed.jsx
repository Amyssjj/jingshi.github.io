import { useEffect, useRef } from 'react';
import { Box, Typography, Container, Paper, useTheme, useMediaQuery } from '@mui/material';

function SubstackFeed() {
  const substackContainerRef = useRef(null);
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    // Create the script element for the configuration
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.SubstackFeedWidget = {
        substackUrl: "jingshi.substack.com",
        posts: 3,
        layout: "center"
      };
    `;
    document.body.appendChild(configScript);

    // Create the script element for the feed API
    const feedScript = document.createElement('script');
    feedScript.src = 'https://substackapi.com/embeds/feed.js';
    feedScript.async = true;
    document.body.appendChild(feedScript);

    // Add intersection observer for animation when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Once it's animated in, we don't need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (substackContainerRef.current) {
      observer.observe(substackContainerRef.current);
    }

    // Cleanup function
    return () => {
      document.body.removeChild(configScript);
      if (document.body.contains(feedScript)) {
        document.body.removeChild(feedScript);
      }
      if (substackContainerRef.current) {
        observer.unobserve(substackContainerRef.current);
      }
    };
  }, []);

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 },
        backgroundColor: 'rgba(249, 249, 249, 0.5)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 1
        }
      }}
      ref={substackContainerRef}
    >
      <Container maxWidth={isLaptop ? "lg" : "md"}>
        <Typography 
          variant="h2" 
          align="center"
          sx={{ 
            mb: { xs: 4, md: 6 },
            fontSize: { xs: '2rem', md: '2.5rem' },
            position: 'relative',
            textShadow: '1px 1px 1px rgba(0,0,0,0.1)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.1) 100%)',
              borderRadius: '2px'
            }
          }}
          data-aos="fade-up"
        >
          Latest Articles
        </Typography>
        
        <Paper
          elevation={0}
          sx={{ 
            mt: 8, 
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            backgroundColor: 'white',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              boxShadow: 'inset 0 0 0 3px rgba(0,0,0,0.05)',
              borderRadius: '16px',
              zIndex: 2,
              pointerEvents: 'none'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '5%',
              width: '90%',
              height: '20px',
              background: 'rgba(0,0,0,0.07)',
              filter: 'blur(10px)',
              borderRadius: '50%',
              zIndex: -1,
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            },
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            '&:hover': {
              transform: 'translateY(-12px) rotateX(2deg)',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.2)',
              '&::after': {
                height: '15px',
                bottom: '-15px',
                filter: 'blur(15px)',
                opacity: 0.7,
                width: '80%',
                left: '10%'
              }
            }
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Decorative corners */}
          <Box sx={{
            position: 'absolute',
            top: '-5px',
            left: '-5px',
            width: '50px',
            height: '50px',
            border: 'none',
            borderTop: '5px solid black',
            borderLeft: '5px solid black',
            borderRadius: '10px 0 0 0',
            opacity: 0.7,
            transition: 'all 0.3s ease-in-out',
            zIndex: 3
          }} />
          
          <Box sx={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            width: '50px',
            height: '50px',
            border: 'none',
            borderTop: '5px solid black',
            borderRight: '5px solid black',
            borderRadius: '0 10px 0 0',
            opacity: 0.7,
            transition: 'all 0.3s ease-in-out',
            zIndex: 3
          }} />
          
          <Box sx={{
            position: 'absolute',
            bottom: '-5px',
            left: '-5px',
            width: '50px',
            height: '50px',
            border: 'none',
            borderBottom: '5px solid black',
            borderLeft: '5px solid black',
            borderRadius: '0 0 0 10px',
            opacity: 0.7,
            transition: 'all 0.3s ease-in-out',
            zIndex: 3
          }} />
          
          <Box sx={{
            position: 'absolute',
            bottom: '-5px',
            right: '-5px',
            width: '50px',
            height: '50px',
            border: 'none',
            borderBottom: '5px solid black',
            borderRight: '5px solid black',
            borderRadius: '0 0 10px 0',
            opacity: 0.7,
            transition: 'all 0.3s ease-in-out',
            zIndex: 3
          }} />
          
          <Box 
            id="substack-feed-embed" 
            sx={{ 
              position: 'relative',
              minHeight: '300px',
              p: 4,
              zIndex: 1,
              '& iframe': {
                maxWidth: '100%',
                borderRadius: '8px',
                transition: 'all 0.3s ease-in-out',
                transform: 'translateZ(0)',
                filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.05))',
              },
              '& a': {
                textDecoration: 'none',
                color: 'primary.main',
                transition: 'color 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  color: 'primary.dark',
                  transform: 'translateY(-2px)'
                }
              }
            }} 
          />
        </Paper>
      </Container>
    </Box>
  );
}

export default SubstackFeed; 