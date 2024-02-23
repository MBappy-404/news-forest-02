
import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";



const CategoryList = async () => {

     const { data: categories } = await getAllCategories();


     return (
          <Box className='flex mt-0 lg:mt-16 justify-center'>
               <Stack rowGap={1} sx={{ mt: 2.5 }} className=" bg-gray-200 rounded-md  pb-8 pt-3 w-[90%] lg:w-[80%] overflow-hidden ">
                    <h2 className=" text-lg text-center text-gray-600 border-b-2 pb-2 border-gray-300 font-semibold">Categories</h2>
                    {categories?.map((category) => (
                         <Link className="flex justify-center" key={category.id}
                              href={`/categories/news?category=${category.title.toLowerCase()}`} >
                              <Button variant="outlined" className="text-sm mt-2 w-[60%] text-gray-500">
                                   {category.title}
                              </Button>
                         </Link>
                    ))}
               </Stack>

          </Box >
     );
};

export default CategoryList;