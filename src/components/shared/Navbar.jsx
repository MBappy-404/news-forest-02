"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from "@/assets/large_newsforest_0.png"
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';



const navItems = [
     {
          route: "Home",
          pathname: "/"
     },
     {
          route: "News",
          pathname: "/categories/news?category=all-news"
     },
     {
          route: "Blog",
          pathname: "/blog"
     },
  
     {
          route: "Contact",
          pathname: "/contact"
     }
];


function Navbar() {

     return (
          <nav position="static" className='bg-gray-200 shadow-lg'>
               <Container maxWidth="xl">
                    <Toolbar disableGutters>
                         <Image src={logo} width={150} height={100} alt="logo" />
                         <Box className="w-full text-center" >
                              {navItems.map((item) => (
                                   <Link
                                        key={item.route}
                                        href={item.pathname}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                   >
                                        <Button className="text-gray-500 font-semibold">
                                             {item.route}
                                        </Button>
                                   </Link>
                              ))}
                         </Box>

                         <Box className="flex  justify-center">
                              <div className="flex justify-center items-center space-x-3">
                                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="logo" />
                                   </a>
                                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="logo" />
                                   </a>
                                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="logo" />
                                   </a>
                                   <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="logo" />
                                   </a>
                                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="logo" />
                                   </a>
                              </div>
                         </Box>
                    </Toolbar>
               </Container>
               
          </nav>
     );
}
export default Navbar;