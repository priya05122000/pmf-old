import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"; // Add this at the top
import Section from "@/components/Section";
import Heading from "@/components/Heading";

// Static logo array - using local placeholder or reliable CDN images
const logos = [
  { src: "/logos/anjana_opticals.png", alt: "Partner 1" },
  { src: "/logos/1.png", alt: "Partner 2" },
  { src: "/logos/2.png", alt: "Partner 3" },
  { src: "/logos/3.png", alt: "Partner 4" },
  { src: "/logos/anjana_opticals.png", alt: "Partner 1" },
  { src: "/logos/1.png", alt: "Partner 2" },
  { src: "/logos/2.png", alt: "Partner 3" },
  { src: "/logos/3.png", alt: "Partner 4" },

];

export default function TrustedSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6, } },
      { breakpoint: 1024, settings: { slidesToShow: 6, } },
      { breakpoint: 768, settings: { slidesToShow: 4, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 3, arrows: false } },
    ],
  };

  return (
    <Section className="py-6 sm:py-12 xl:py-16  bg ">
      <Heading level={6} className="text-white font-bold mb-10">Trusted by <span className="text-[#BEBEBE] "> 20,000+ </span>customers across Europe</Heading>
      <div>
        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <div key={idx} className="px-2 flex justify-center items-center py-6">
              <div className="flex justify-center items-center h-full w-full ">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={400}
                  quality={100}
                  // className="h-16 lg:h-20 object-contain max-w-[120px] w-full filter grayscale hover:grayscale-0 transition-all"
                  className="h-16 lg:h-20 object-contain  w-full  transition-all"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
}