import * as React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sectionDescription = "Don’t take our word for it. Over 100+ people trust us.";
const cardReviews = [
  {
    review: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    name: "Hussain Alnakhli",
    time: "5 days ago",
    stars: 4,
    icon: "/boy.png"
  },
];

interface Review {
  review: string;
  name: string;
  time: string;
  stars: number;
  icon: string;
}

const renderStars = (rating: number) => {
  const totalStars = 5;
  return (
    <>
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index} className={index < rating ? "text-[#69A2BE] text-xl" : "text-gray-400 text-xl"}>
          &#9733;
        </span>
      ))}
    </>
  );
};

const Testimonial: React.FC = () => {
  return (
    <Carousel className="w-11/12 md:w-full xl:w-9/12 2xl:w-8/12 mx-auto relative">
      <div className="text-center mb-6 border-[#ffffff31] border rounded-full md:text-lg max-w-[200px] p-2 px-4 mx-auto text-white uppercase">Testimonials</div>
      <div className="text-center mb-10 lg:mb-20 text-white md:text-3xl text-2xl w-9/12 mx-auto">{sectionDescription}</div>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 7 }).map((_, i) => (
          cardReviews.map((item: Review, index: number) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2">
              <div className="p-1">
                <Card className="relative overflow-hidden bg-[#d9d9d915] border-[#0D4764] border">
                  <div className="absolute inset-0 bg-[#d9d9d915] backdrop-blur-sm"></div>
                  <div className="relative flex flex-col min-h-52 max-h-52 justify-center p-3 lg:p-5">
                    <div className="text-gray-300 italic">"{item.review}"</div>
                    <div className="flex justify-between items-center mt-10">
                      <div className="flex items-center">
                        <Image className="w-12 h-12" width={60} height={60} src={item.icon} alt={`${item.name} picture`} />
                        <div className="ml-2">
                          <div className="text-gray-300">{item.name}</div>
                          <div className="text-gray-500">{item.time}</div>
                        </div>
                      </div>
                      <div className="flex space-x-1 text-[#69A2BE]">
                        {renderStars(item.stars)}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default Testimonial;
