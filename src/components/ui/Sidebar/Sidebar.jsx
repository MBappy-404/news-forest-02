import {
     Box,
     Card,
     CardActionArea,
     CardContent,
     CardMedia,
     Grid,
     Typography,
   } from "@mui/material";
   import Image from "next/image";
   import endNews from "@/assets/f9908de442da15ffbfbb2ea86d69affa.jpeg";
   import { getAllNews } from "@/utils/getAllNews";
   
   const Sidebar = async () => {
     const { data } = await getAllNews();
     return (
       <Box>
         <Card className="my-5">
           <CardActionArea>
             <CardMedia>
               <Image
                 src={data[0].thumbnail_url}
                 width={1000}
                 height={500}
                 alt="image"
               />
             </CardMedia>
             <CardContent>
               <span className="bg-red-500 text-white px-4 mb-3 rounded-sm text-xs  py-1">
                 {data[0].category}
               </span>
               <Typography
                 gutterBottom
                 variant="h5"
                 className="font-semibold pt-2 text-gray-500"
                 component="div"
               >
                 {data[0].title}
               </Typography>
               <Typography
                 variant="body2"
                 className="text-sm md:text-lg"
                 color="text.secondary"
               >
                 {data[0].details.slice(0, 100) + "...."}
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
   
         {data.slice(0, 8).map((news) => (
           <Grid key={news._id} className="my-4 border-b-2">
             <CardActionArea className="flex pb-2 mt-2">
               <CardMedia>
                 <div className="bg-gray-200 mb-2 w-28 h-24"></div>
               </CardMedia>
               <CardContent>
                 <Typography
                   className="text-lg text-gray-500 font-semibold"
                   color="text.secondary"
                 >
                   {news.title}.
                 </Typography>
                 <p className="text-xs text-gray-400">
                   {news.author.published_date}
                 </p>
               </CardContent>
             </CardActionArea>
           </Grid>
         ))}
   
         <Card className="my-5">
           <CardMedia>
             <Image src={endNews} alt="image" />
           </CardMedia>
         </Card>
       </Box>
     );
   };
   
   export default Sidebar;
   