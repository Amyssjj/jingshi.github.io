import { Box, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import TwitterIcon from '@mui/icons-material/X';

function SocialIcons() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const socialLinks = [
    { 
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/jing-shi-57200851/',
      label: 'LinkedIn',
    },
    {
      icon: TwitterIcon,
      url: 'https://x.com/Jing_Shi__', // Replace with your Twitter handle
      label: 'X / Twitter',
    },
    {
      icon: ArticleIcon,
      url: 'https://jingshi.substack.com/',
      label: 'Substack',
    },
    { 
      icon: GitHubIcon,
      url: 'https://github.com/Amyssjj/Agent_Exploration',
      label: 'GitHub',
    },
    {
      icon: PodcastsIcon,
      url: 'https://podcasts.apple.com/us/podcast/sst-sisters-talk/id1790765666',
      label: 'Podcast',
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <Tooltip key={label} title={label} arrow>
          <IconButton
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: { xs: 38, sm: 40, md: 44 },
              height: { xs: 38, sm: 40, md: 44 },
              bgcolor: 'background.paper',
              boxShadow: 1,
              '& .MuiSvgIcon-root': {
                fontSize: { xs: 18, sm: 20, md: 22 },
                transition: 'color 0.3s',
              },
              '&:hover': {
                bgcolor: 'primary.main',
                transform: 'translateY(-4px)',
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              },
            }}
          >
            <Icon />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}

export default SocialIcons; 