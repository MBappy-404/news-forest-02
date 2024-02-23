import { getSingleNews } from "@/utils/getSingleNews";
import {
  Avatar,
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const NewsDetails = async ({ params }) => {
  const { data } = await getSingleNews(params.newsId);

  return (
    <div>
      {
        <Grid container key={data._id}>
          <CardActionArea className=" mt-5  my-1">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} lg={6}>
                <CardMedia
                  className="mt-5"
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                    },
                  }}
                >
                  <Image
                    src={data.image_url}
                    className="rounded-md"
                    width={800}
                    height={200}
                    alt="image"
                  />
                </CardMedia>
              </Grid>
              <Grid item xs={12} lg={6}>
                <CardContent>
                  <Typography
                    className=" font-semibold text-gray-500 text-xl"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    {data.title}
                  </Typography>
                  <Box
                    className="text-gray-400 py-1"
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <Avatar alt="author" src={data.author.img} />
                    <Typography>By {data.author.name}</Typography>
                    <Typography>- {data.author.published_date}</Typography>
                  </Box>
                  <Typography
                    className="text-base mt-6"
                    sx={{
                      textAlign: "justify",
                      whiteSpace: "pre-line",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {data.details}
                  </Typography>

                  <Box className="flex justify-start gap-5  text-gray-400 mt-2">
                    <p>Total Views: {data.total_view}</p>
                    <p>Rating: {data.rating.number}</p>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
          <h2></h2>
        </Grid>
      }
    </div>
  );
};

export default NewsDetails;
