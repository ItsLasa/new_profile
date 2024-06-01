import Image from "next/image";
import React from "react";

function favourite() {
  return (
    <main className=" w-max h-auto p-4 bg-gradient-to-r from-neutral-900 to-zinc-900 rounded-2xl ">
    <div className="people" >
        <h1 className=" ml-6 font-semibold">People I Learn From</h1>
    <div className="flex gap-16 pt-4 justify-center items-center cursor-pointer ">
        <div>
          <div>
            <Image
              src={
                "https://devscard.netlify.app/_astro/person-1.50354293_19IHa1.webp"
              }
              alt={"image 1"}
              width={120}
              height={120}
              className="rounded-lg transition-transfor duration-300 hover:scale-110"
            />
          </div>
          <div>
            <h1 className="pt-2">Kent C. Dodds</h1>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={
                "https://devscard.netlify.app/_astro/person-3.b4acc9c0_Z1kp64P.webp"
              }
              alt={"image 1"}
              width={120}
              height={140}
              className="rounded-lg transition-transfor duration-300 hover:scale-110"
            />
          </div>
          <div>
            <h1 className="pt-2">Eric Evans</h1>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={
                "https://devscard.netlify.app/_astro/person-4.ff8da04e_1FXfbu.webp"
              }
              alt={"image 1"}
              width={120}
              height={140}
              className="rounded-lg transition-transfor duration-300 hover:scale-110"
            />
          </div>
          <div>
            <h1 className="pt-2">Martin Fowler</h1>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={
                "https://devscard.netlify.app/_astro/person-5.079f8f93_tlxi2.webp"
              }
              alt={"image 1"}
              width={120}
              height={120}
              className="rounded-lg transition-transfor duration-300 hover:scale-110"
            />
          </div>
          <div>
            <h1 className="pt-2 ">Robert C. Martin</h1>
          </div>
        </div>


        <div>
          <div>
            <Image
              src={
                "https://devscard.netlify.app/_astro/person-6.5eebea5e_mHMj2.webp"
              }
              alt={"image 1"}
              width={120}
              height={120}
              className="rounded-lg transition-transfor duration-300 hover:scale-110"
            />
          </div>
          <div>
            <h1 className="pt-2">Adam Dymitruk</h1>
          </div>
        </div>


        </div>
      </div>


      <div className="video pt-6 " >
        <h1 className=" font-semibold ml-6">Videos I watched</h1>
    <div className="flex gap-6 pt-4 justify-center items-center cursor-pointer">
        <div>
          <div>
            <Image
              src={
                "https://devscard.netlify.app/_astro/video-1.5fd1c2c4_Z14ws01.webp"
              }
              alt={"image 1"}
              width={400}
              height={360}
              
              className="rounded-lg transition-transfor duration-200 hover:rounded-3xl hover:border-[1px] bg-purple-50"
            />
          </div>
          <div>
            <h1 className="pt-2 ">Building Resilient Frontend Architecture <br /> • Monica Lent • GOTO 2019</h1>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={
                "https://devscard.netlify.app/_astro/video-2.d5d518e8_qJsNb.webp"
              }
              alt={"image 1"}
              width={400}
              height={360}
              
              className="rounded-lg "
            />
          </div>
          <div>
            <h1 className="pt-2 ">caling Yourself • Scott Hanselman <br /> • GOTO 2012</h1>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={
                "https://devscard.netlify.app/_astro/video-3.87a0ef3b_1ELGDH.webp"
              }
              alt={"image 1"}
              width={400}
              height={360}
              
              className="rounded-lg "
            />
          </div>
          <div>
            <h1 className="pt-2 ">Why Is not Functional Programming <br /> the Norm? - Richard Feldman</h1>
          </div>
        </div>

       

        


        


        </div>
      </div>
    </main>
  );
}

export default favourite;
