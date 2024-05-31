"use client";
import Image from "next/image";
import React from "react";
import { BackgroundBeams } from "../app/components/ui/background-beams";
import Navbar from '../app/components/navbar';

import { WobbleCard } from "../app/components/ui/wobble-card";

export default function Home() {
  return (
 
    <div className=" h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
           
      <div className="py-4">
      <Navbar/>
      </div>


      <div className="max-w-2xl mx-auto p-4 flex flex-col justify-center items-center gap-6">
        
        <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hey, I’m Manoj 👾 Product designer building his ideas. This is my
          little corner on the internet <span className=" text-orange-400">🌏</span> where you can learn about me and my
          work. Have a project in mind you’re excited about? Let’s chat.
        </h1>
      
          
     
       
        {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
          Hey, I’m Roman - Product designer building his ideas. This is my little corner on the internet, where you can learn about me and my work. Have a project in mind you’re excited about? Let’s chat.
          </p> */}
        <div className="flex justify-center items-center relative z-20 py-6">
        
          <button className="bg-gradient-to-r  from-cyan-500 to-blue-500 px-8 py-2 rounded-md hover:text-xl
          hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]
          ">
            Say Hello
           
          </button>
          
        
         
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full relative z-20 ">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
      <BackgroundBeams/>
    </div>

  );
}
