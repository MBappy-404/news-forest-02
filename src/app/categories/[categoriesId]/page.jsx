import { getCategoriesNews } from "@/utils/getCategoriesNews";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const page = async ({ searchParams }) => {
  const { data } = await getCategoriesNews(searchParams.category);
  return (
    <div>
      <div className="border-b-2 pt-5 pb-1">
        <div class="relative  inline-block ">
          <span class="text-xl md:text-3xl text-gray-700 font-bold">
            {searchParams.category.toUpperCase()}
          </span>
          <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
      </div>
      <Grid
        container
        className="my-4"
        rowSpacing={0.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news._id} item xs={12} md={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <CardActionArea className="bg-gray-100 my-1">
                <CardMedia
                  className="h-[250px] w-full"
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.image_url}
                    className="rounded-md object-cover"
                    width={800}
                    height={200}
                    alt="image"
                  />
                </CardMedia>
                <CardContent>
                  <span className="bg-red-500 text-white px-4 mb-3 rounded-sm text-xs   py-1">
                    {news.category}
                  </span>
                  <Typography
                    className="mt-3 font-semibold text-gray-500 text-xl"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {news.title.slice(0, 25) + "...."}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details.slice(0, 150)}...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default page;
