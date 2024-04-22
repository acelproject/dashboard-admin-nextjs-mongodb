import Image from "next/image";

import { AlignJustify } from "lucide-react";
import astronotImg from "@/public/astronaut.png";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import { Sheet, SheetContent, SheetTrigger,SheetClose } from "@/components/ui/sheet";

const RightBarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        {/* <AlignJustify className="cursor-pointer" /> */}🚀
      </SheetTrigger>
      <SheetContent className="overflow-scroll">
        <div className="md:static absolute left-0 md:px-0 px-5 pt-12 md:bg-none bg-bg top-0  ">
          <div className="relative py-[20px] px-[24px] rounded-md mb-[20px] bg-gradient-to-t from-[#182237] to-[#253352] ">
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
              <Image
                src={astronotImg}
                alt=""
                fill
                className="object-contain opacity-[0.2]"
              />
            </div>
            <div className="flex flex-col gap-y-[24px]">
              <span className="font-bold">🔥 Available Now</span>
              <h3 className="font-bold text-[20px] leading-7 text-white">
                How to use the new version of the admin dashboard?
              </h3>
              <span className="text-textSoft">Take 4 minutes to learn</span>
              <p className="text-textSoft">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                quam quae beatae? Ea quis suscipit facilis, sapiente ipsum
                laudantium beatae!
              </p>
              <button className="px-3 py-2 flex items-center gap-[6px] bg-[#5d57c9] text-white border-none rounded-md cursor-pointer w-max">
                <MdPlayCircleFilled />
                <span>Watch</span>
              </button>
            </div>
          </div>
          <div className="relative py-[20px] px-[24px] rounded-md mb-[20px] bg-gradient-to-r from-[#182237] to-[#253352]">
            <div className="flex flex-col gap-y-[24px]">
              <span className="font-bold">🚀 Coming soon</span>
              <h3 className="font-bold text-[20px] leading-7 text-white">
                New server actions are available, partial pre-rendering is
                coming up!
              </h3>
              <span className="text-textSoft">Take 4 minutes to learn</span>
              <p className="text-textSoft">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                quam quae beatae? Ea quis suscipit facilis, sapiente ipsum
                laudantium beatae!
              </p>
              <button className="py-2 px-3 flex items-center gap-[6px] bg-[#5d57c9] text-white border-none rounded-md cursor-pointer w-max">
                <MdReadMore />
                <span>Learn</span>
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RightBarMobile;
