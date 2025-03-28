import { Box, Container, Typography, Grid, Stack, useTheme, useMediaQuery } from '@mui/material';
import SocialIcons from './SocialIcons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Hero() {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <Box 
      component="section" 
      sx={{
        minHeight: { xs: '90vh', md: '88vh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 16, md: 16 },
        pb: { xs: 8, md: 16 },
        position: 'relative',
      }}
    >
      <Container maxWidth={isLaptop ? "lg" : "md"} sx={{ width: '100%' }}>
        {/* Mobile View - Stack with Image on top */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Stack spacing={6}>
            {/* Image First */}
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                height: '350px',
                width: '100%',
                mx: 'auto',
                maxWidth: '350px',
              }}
              data-aos="fade-down"
            >
              <Box
                component="img"
                src="/images/hero_v2.png?v=1"
                alt="Jing Shi"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Box>

            {/* Content Second */}
            <Box data-aos="fade-up">
              <Box 
                sx={{ 
                  mb: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  justifyContent: 'center',
                }}
              >
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 2, 
                    bgcolor: 'primary.main' 
                  }} 
                />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: 'primary.main',
                  }}
                >
                  Hello
                </Typography>
              </Box>

              <Typography 
                variant="h1" 
                sx={{ 
                  mb: 2,
                  fontSize: '2.5rem',
                  textAlign: 'center',
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    fontWeight: 400,
                    color: 'text.secondary',
                  }}
                >
                  I'm
                </Box>
                {' '}Jing Shi
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2,
                  color: 'text.secondary',
                  textAlign: 'center',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: '"Charter", "Georgia", "Cambria", "Times New Roman", serif',
                  letterSpacing: '0.01em',
                }}
              >
                At the intersection of product intuition & AI alchemy, here is my lifelong laboratory, 
                where I fuse relentless user-centric thinking with AI's transformative potential: 
                Learn → Build → Reflect → Compound
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2,
                  color: 'text.secondary',
                  textAlign: 'center',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: '"Charter", "Georgia", "Cambria", "Times New Roman", serif',
                  letterSpacing: '0.01em',
                }}
              >
                A lifelong loop where prototypes sharpen intuition, failures fuel better tools, 
                and every cycle bends the curve toward thinking beyond speed.
              </Typography>

              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 4,
                  color: 'text.secondary',
                  textAlign: 'center',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: '"Charter", "Georgia", "Cambria", "Times New Roman", serif',
                  letterSpacing: '0.01em',
                  fontStyle: 'italic',
                }}
              >
                What would give future-me—and future-you—10x more clarity, creativity, and flow?
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 4,
                }}
              >
                <SocialIcons />
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* Desktop View - Side by Side */}
        <Box 
          sx={{ 
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: { sm: 6, md: 10 },
            alignItems: 'center',
            mx: 'auto',
            width: '100%',
            justifyContent: 'space-between',
            px: { sm: 2, md: 0 },
          }}
        >
          {/* Content - Left side on desktop */}
          <Box 
            sx={{ 
              flex: '1 1 55%',
              maxWidth: '55%'
            }} 
            data-aos="fade-right"
          >
            <Box 
              sx={{ 
                mb: 2, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
              }}
            >
              <Box 
                sx={{ 
                  width: 48, 
                  height: 2, 
                  bgcolor: 'primary.main' 
                }} 
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: 'primary.main',
                }}
              >
                Hello
              </Typography>
            </Box>

            <Typography 
              variant="h1" 
              sx={{ 
                mb: 3,
                fontSize: { sm: '3rem', md: '3.5rem' },
                textAlign: 'left',
              }}
            >
              <Box 
                component="span" 
                sx={{ 
                  fontWeight: 400,
                  color: 'text.secondary',
                }}
              >
                I'm
              </Box>
              {' '}Jing Shi
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2,
                color: 'text.secondary',
                textAlign: 'left',
                fontSize: { sm: '1.2rem', md: '1.25rem' },
                lineHeight: 1.7,
                fontFamily: '"Charter", "Georgia", "Cambria", "Times New Roman", serif',
                letterSpacing: '0.01em',
                maxWidth: '95%',
              }}
            >
              At the intersection of product intuition & AI alchemy, here is my lifelong laboratory, 
              where I fuse relentless user-centric thinking with AI's transformative potential: 
              Learn → Build → Reflect → Compound
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2,
                color: 'text.secondary',
                textAlign: 'left',
                fontSize: { sm: '1.2rem', md: '1.25rem' },
                lineHeight: 1.7,
                fontFamily: '"Charter", "Georgia", "Cambria", "Times New Roman", serif',
                letterSpacing: '0.01em',
                maxWidth: '95%',
              }}
            >
              A lifelong loop where prototypes sharpen intuition, failures fuel better tools, 
              and every cycle bends the curve toward thinking beyond speed.
            </Typography>

            <Typography 
              variant="body2" 
              sx={{ 
                mb: 4,
                color: 'text.secondary',
                textAlign: 'left',
                fontSize: { sm: '1.2rem', md: '1.25rem' },
                lineHeight: 1.7,
                fontFamily: '"Charter", "Georgia", "Cambria", "Times New Roman", serif',
                letterSpacing: '0.01em',
                fontStyle: 'italic',
                maxWidth: '95%',
              }}
            >
              What would give future-me—and future-you—10x more clarity, creativity, and flow?
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex',
                justifyContent: 'flex-start',
                mb: 4,
              }}
            >
              <SocialIcons />
            </Box>
          </Box>
          
          {/* Image - Right side on desktop */}
          <Box 
            sx={{ 
              flex: '1 1 40%',
              maxWidth: '40%'
            }} 
            data-aos="fade-left"
          >
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                height: { sm: '450px', md: '500px', lg: '550px' },
                width: '100%',
              }}
            >
              <Box
                component="img"
                src="/images/hero_v2.png?v=1"
                alt="Jing Shi"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 30 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          opacity: 0.7,
          '&:hover': {
            opacity: 1
          },
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateY(0) translateX(-50%)'
            },
            '40%': {
              transform: 'translateY(-10px) translateX(-50%)'
            },
            '60%': {
              transform: 'translateY(-5px) translateX(-50%)'
            }
          }
        }}
        onClick={() => {
          document.getElementById('spiral-blueprints').scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
      >
        <Typography 
          variant="caption" 
          sx={{ 
            mb: 1, 
            fontSize: '0.75rem',
            color: 'text.secondary',
          }}
        >
          Scroll down
        </Typography>
        <KeyboardArrowDownIcon 
          sx={{ 
            fontSize: { xs: 24, md: 32 },
            color: 'primary.main'
          }} 
        />
      </Box>
    </Box>
  );
}

export default Hero; 