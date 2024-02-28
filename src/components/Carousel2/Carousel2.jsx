import { Carousel } from "@material-tailwind/react";
 
export default function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="/images/carro1.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/carro2.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/carro3.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}