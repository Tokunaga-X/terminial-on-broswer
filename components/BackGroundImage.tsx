import BG_Image from '../public/wallpapper.jpeg'
import Image from "next/image";
import React from "react";

export default function BackgroundImage() {
	return (
		<div className="absolute top-0 w-full h-screen -z-10">
            <div className="wrapper w-full h-full p-0 m-0 object-cover object-center bg-black bg-opacity-70"
><Image
				src={BG_Image}
				alt="wallpaper"
				className="h-full w-full object-cover object-center"
			/></div>
			
		</div>
	);
}
