"use client";
import Image from "next/image";
import React from "react";
import { BackgroundBeams } from "../app/components/ui/background-beams";
import Navbar from '../app/components/navbar';

export default function Home() {
  return (
 
    <div className=" h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
           
       <Navbar/>


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
      <BackgroundBeams/>
    </div>

  );
}
