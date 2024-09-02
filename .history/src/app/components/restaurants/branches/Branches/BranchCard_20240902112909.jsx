import React from "react";
import Image from "next/image";
import images from "../../../../../../public/images/index";
import Tags from "../../Tags";
import Rating from "@/app/components/Rating";

const BranchCard = ({ branch }) => {
  return (
    <div className="relative  flex flex-col sm:flex-row border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* <div className=""> */}
        <Image
          src={images.branch}
          alt=""
          layout="responsive"
          className="object-cover max-w-[400px] md:max-w-[340px] "

        />
        
      {/* </div> */}
      <div className="flex flex-col p-4 w-full">
        <div className="flex justify-between gap-3 flex-col md:flex-row">
          <div>
            <h2 className="text-xl  font-medium">
              Arcadian Cafe
            </h2>
            <div className="flex flex-col">
              <div className="flex justify-between text-gray-80 font-normal text-sm md:text-base">
                <p>Italian • French • Asian</p>
              </div>
              <p className="text-gray-80 font-normal text-sm md:text-base">$$$</p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <button className=" text-blue-500 h-[40px] p-2 flex gap-2 flex-center text-base rounded-lg border border-blue-500">
              <Image src={images.modify}  alt="" /> Modify
            </button>
            <button className=" text-red-500 p-2 flex gap-2 flex-center text-base rounded-lg border border-red-500">
              <Image src={images.trashbin} alt="" />
              Delete
            </button>

          </div>
        </div>

          <div className="flex flex-col h-full gap-2 justify-between  mt-2 ">
            <div className="flex flex-row gap-2">
              <Tags Text="Free Wifi" />
              <Tags Text="Free Wife" />
            </div>
            <Rating />
          </div>
      </div>
    </div>
  );
};

export default BranchCard;

{
  /* */
}
