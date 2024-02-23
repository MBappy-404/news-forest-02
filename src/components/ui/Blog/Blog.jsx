import Image from 'next/image';
import React from 'react';

function Blog() {


    return (
        <div>
            <div className=" py-5 text-center">
                <div className="relative inline-block ">
                    <span className="text-xl md:text-3xl font-bold">
                         Upcoming
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
                </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 py-5 gap-3">
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?hanging-planters" alt="Hanging Planters" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Hanging Planters
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?planter-stand" alt="Planter Stand with Pots" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Planter Stand with Pots
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?watering-cans" alt="Watering Cans" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Watering Cans
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?metal-planters" alt="Metal Planters" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Metal Planters
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?table-top-planters" alt="Table Top Planters" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Table Top Planters
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?wall-mounted-stands" alt="Wall Mounted Stands" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Wall Mounted Stands
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?jute-plant-pots" alt="Jute Plant Pots" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Jute Plant Pots
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?bird-feeders" alt="Bird Feeders" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Bird Feeders
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?hanging-birds" alt="Hanging Birds" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
                        Hanging Birds
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?garden-sticks" alt="Garden Sticks" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Garden Sticks
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?garden-tray-miniatures" alt="Garden Tray Miniatures" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
                        Garden Tray Miniatures
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?garden-tool-set" alt="Garden Tool Set" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
                        Garden Tool Set
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?candle-stand" alt="Candle Stand" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
                        Candle Stand
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?lanterns" alt="Lanterns" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
                        Lanterns
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?chimes" alt="Chimes" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
                        Chimes
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?cage" alt="Cage" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
                        Cage
                    </p>
                </div>
                <div className="relative rounded overflow-hidden">
                    <Image height={400} width={400} src="https://source.unsplash.com/400x300/?bird-house-hanging" alt="Bird House Hanging" className="w-full" />
                    <p
                        className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
                        Bird House Hanging
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
