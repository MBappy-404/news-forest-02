"use client"
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/navigation';
import {  ContactPage, EditCalendar, Home, Newspaper } from '@mui/icons-material';
import { AppBar } from '@mui/material';

export default function MobileMenu() {
     const [value, setValue] = React.useState(0);
     const router = useRouter();
     const handleNavigation = (path) => {
          router.push(path);
     };
     return (
          <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>

               <BottomNavigation
                    className='bg-gray-200'
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                         setValue(newValue);
                    }}
               >
                    <BottomNavigationAction onClick={() => handleNavigation('/')} label="Home" icon={<Home />} />
                    <BottomNavigationAction onClick={() => handleNavigation('/categories/news?category=all-news')} label="News" icon={<Newspaper />} />
                    <BottomNavigationAction onClick={() => handleNavigation('/blog')} label="Blog" icon={<EditCalendar />} />
                    <BottomNavigationAction onClick={() => handleNavigation('/contact')} label="Contact" icon={<ContactPage />} />
               </BottomNavigation>
          </AppBar>
     );
}