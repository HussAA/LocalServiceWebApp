import * as React from "react";

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

const sectionDescription = ["Don’t take our word for it.over 100+ people trust us."]
const cardReviews = [
    {
        review: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        name:"Hussain Alnakhli",
        time:"5 days ago",
        stars:4,
    },
]



const Testimonial = () => {
  return (
    <Carousel className="w-full xl:w-9/12 2xl:w-8/12 mx-auto relative">
      <div className="text-center mb-6 border-[#ffffff31] border rounded-full md:text-lg max-w-[200px] p-2 px-4 mx-auto text-white uppercase">Testimonials</div>
      <div className="text-center mb-10 lg:mb-20 text-white md:text-3xl text-2xl w-9/12 mx-auto">{sectionDescription}</div>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map(() => (
          cardReviews.map((item, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2">
              <div className="p-1">
                <Card className="bg-[#d9d9d90e] border-[#0D4764] border backdrop-blur-md">
                  <div className="flex flex-col max-h-52 justify-center p-8">
                    <div className="text-gray-300">{item.review}</div>
                    <div className="flex justify-between items-center mt-10">
                      <div className="text-wrap">
                        <div className="text-gray-300">{item.name}</div>
                        <div className="text-gray-500">{item.time}</div>
                      </div>
                      <div className="text-[#69A2BE]">{item.stars}</div>
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



