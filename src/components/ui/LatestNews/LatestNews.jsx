
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import topNews from '@/assets/top.jpeg'
import { getAllNews } from '@/utils/getAllNews';

const LatestNews = async () => {
     const { data } = await getAllNews();

     return (
          <div>
               <Box className="mb-5">
                    <Card className='my-5'>
                         <CardActionArea>
                              <CardMedia>
                                   <Image src={data[0].thumbnail_url} width={1000} height={500} alt='image' />
                              </CardMedia>
                              <CardContent>
                                   <span className='bg-red-500 text-white px-4 mb-3 rounded-sm text-xs  py-1'>{data[0].category}</span>
                                   <Typography gutterBottom variant="h5" className='font-semibold pt-2 text-gray-500' component="div">
                                        {data[0].title}
                                   </Typography>
                                   <Typography variant="body2" className='text-sm md:text-lg' color="text.secondary">
                                        {data[0].details.slice(0, 200) + "...."}
                                   </Typography>
                              </CardContent>
                         </CardActionArea>
                    </Card>
                    <Grid container rowSpacing={1} spacing={1} >

                         {
                              data.slice(0, 4).map((news) =>
                                   <Grid key={news._id} item xs={12} md={6}>

                                        <CardActionArea className='bg-gray-100 my-1 '>
                                             <CardMedia className='h-[250px] w-full'
                                                  sx={{
                                                       "& img": {
                                                            width: "100%",
                                                            height: "250px"
                                                       }
                                                  }}
                                             >
                                                  <Image src={news.image_url} className='rounded-md object-cover' width={800} height={200} alt='image' />
                                             </CardMedia>
                                             <CardContent>
                                                  <span className='bg-red-500 text-white px-4 mb-3 rounded-sm text-xs   py-1'>{news.category}</span>
                                                  <Typography className='mt-3 font-semibold text-gray-500 text-xl' gutterBottom variant="h5" component="div">
                                                       {news.title.slice(0,25)+"...."}
                                                  </Typography>
                                                  <Typography variant="body2" className='text-sm md:text-lg' color="text.secondary">
                                                       {news.details.slice(0, 130)}...
                                                  </Typography>
                                             </CardContent>
                                        </CardActionArea>

                                   </Grid>

                              )
                         }


                    </Grid>
                    
               </Box>
          </div>
     );
};

export default LatestNews;