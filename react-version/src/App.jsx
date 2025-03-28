import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import theme
import theme from './theme';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SubstackFeed from './components/SubstackFeed';
import Footer from './components/Footer';

// Import fonts
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Services />
      <SubstackFeed />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
