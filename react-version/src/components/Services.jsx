import { Container, Box, Typography, Grid, useMediaQuery, useTheme, Link } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PillarCard = ({ icon: Icon, title, description, delay, url }) => (
  <Box
    sx={{ 
      p: { xs: 2, sm: 3 },
      height: '100%', 
      minHeight: { xs: 280, sm: 300, md: 320 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 1,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 8,
        right: 8,
        height: '4px',
        backgroundColor: 'primary.main',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease-in-out',
      },
      '&:hover': {
        boxShadow: 3,
        transform: 'translateY(-4px)',
        '&::before': {
          transform: 'scaleX(1)',
        },
      },
    }}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <Box>
      <Icon sx={{ fontSize: { xs: 40, md: 48 }, mb: 1, color: 'primary.main' }} />
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 2, 
          fontWeight: 500,
          fontSize: { xs: '1.25rem', md: '1.5rem' }
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary" 
        sx={{ 
          mb: 4,
          fontSize: { xs: '0.875rem', md: '1rem' },
          lineHeight: 1.6
        }}
      >
        {description}
      </Typography>
    </Box>
    <Link 
      href={url} 
      underline="none"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        '&:hover': {
          '& .MuiSvgIcon-root': {
            transform: 'translateX(4px)',
          },
        },
      }}
    >
      <Typography
        variant="button"
        sx={{ 
          textTransform: 'none',
          fontWeight: 500,
          color: 'primary.main',
          fontSize: { xs: '0.875rem', md: '1rem' }
        }}
      >
        Read more
      </Typography>
      <ArrowForwardIcon
        sx={{
          transition: 'transform 0.3s',
          fontSize: { xs: 18, md: 20 },
          color: 'primary.main'
        }}
      />
    </Link>
  </Box>
);

function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));
  
  const pillars = [
    {
      icon: PsychologyIcon,
      title: 'Thinking in Public',
      description: 'Essays distilling lessons from books, failures, and cross-disciplinary collisions.',
      delay: isMobile ? 100 : 200,
      url: 'https://jingshi.substack.com/',
    },
    {
      icon: CodeIcon,
      title: 'Building in the Open',
      description: 'Prototypes, code, and ventures where AI-augmented experimentation meets human intuition.',
      delay: isMobile ? 150 : 300,
      url: 'https://github.com/Amyssjj/Agent_Exploration',
    },
    {
      icon: HeadsetMicIcon,
      title: 'Evolving Systems',
      description: 'Templates, workflows, and mental models designed to scale defensible insights, not just effort.',
      delay: isMobile ? 200 : 400,
      url: 'https://podcasts.apple.com/us/podcast/sst-sisters-talk/id1790765666',
    },
  ];

  return (
    <Box 
      component="section" 
      id="spiral-blueprints"
      sx={{ 
        py: { xs: 6, md: 8 },
        backgroundColor: 'rgba(249, 249, 249, 0.5)'
      }}
    >
      <Container maxWidth={isLaptop ? "lg" : "md"}>
        <Typography 
          variant="h2" 
          align="center"
          sx={{ 
            mb: { xs: 4, md: 6 },
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
          data-aos="fade-up"
        >
          Spiral Blueprints
        </Typography>

        {/* For tablet and smaller: stacked grid */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {pillars.map((pillar) => (
              <Grid item xs={12} sm={6} key={pillar.title}>
                <PillarCard {...pillar} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* For laptop and larger: horizontal row */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            gap: 3,
            justifyContent: 'space-between',
          }}
        >
          {pillars.map((pillar, index) => (
            <Box 
              key={pillar.title} 
              sx={{ 
                flex: '1 1 0',
                maxWidth: 'calc(33.333% - 16px)',
              }}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <PillarCard {...pillar} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Services; 