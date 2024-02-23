"use client"

const Footer = () => {
     return (
          <div className="bg-gray-200 py-5">
               <footer className="flex flex-col space-y-10 justify-center m-10">

                    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                         <a className="hover:text-gray-900" href="#">Home</a>
                         <a className="hover:text-gray-900" href="#">News</a>
                         <a className="hover:text-gray-900" href="#">Blog</a>
                         <a className="hover:text-gray-900" href="#">Contact</a>
                    </nav>

                    <div className="flex justify-center space-x-5">
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
                    <p className="text-center text-gray-700 font-medium">&copy; 2024 News Forest. All rights reservered.</p>
               </footer>
          </div>
     );
};

export default Footer;