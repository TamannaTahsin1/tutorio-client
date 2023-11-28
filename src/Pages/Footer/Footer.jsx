import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <footer>
      <Box sx={{
        textAlign: 'center',
        padding: '1rem',
        lineHeight: '2rem',
        backgroundColor: 'rgb(31, 41, 55)'
      }}>
        <Typography sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: 'rgb(59, 130, 246)'
        }}>
          Tutorio
        </Typography>
        <Typography>
          &copy; {new Date().getFullYear()} Tutorio. All rights reserved. 
        </Typography>
        <Typography>
          123 Main Street, City, State, Country
        </Typography>
        <Typography>
          Call Us: +008123456
        </Typography>
        <Typography>
          tutorio@gmail.com
        </Typography>
        <Box sx={{marginTop: '1rem'}}>
            <a>
            <InstagramIcon sx={{
               marginRight: '10px',
              transition: 'color 0.3s ease',
              '&:hover':{
                color: 'rgb(0, 0, 255)'
              }
            }}/>
            </a>
            <a>
            <FacebookIcon sx={{
               marginRight: '10px',
              transition: 'color 0.3s ease',
              '&:hover':{
                color: 'rgb(0, 0, 255)'
              }
            }}/>
            </a>
            <a>
            <LinkedInIcon sx={{
              marginRight: '10px',
              transition: 'color 0.3s ease',
              '&:hover':{
                color: 'rgb(0, 0, 255)'
              }
            }}/>
            </a>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;