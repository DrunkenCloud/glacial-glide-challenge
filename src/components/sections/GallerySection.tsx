import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const photos = [
  "/gallery/glofeagles-02.webp",
  "/gallery/glofeagles-05.webp",
  "/gallery/glofeagles-11.webp",
  "/gallery/glofeagles-01.webp",
  "/gallery/glofeagles-04.webp",
  "/gallery/glofeagles-03.webp",
  "/gallery/glofeagles-07.webp",
  "/gallery/glofeagles-08.webp",
  "/gallery/glofeagles-09.webp",
  "/gallery/glofeagles-06.webp",
  "/gallery/glofeagles-10.webp",
];

const PER_PAGE = 6; // two rows of three per slide
const pages = Array.from(
  { length: Math.ceil(photos.length / PER_PAGE) },
  (_, i) => photos.slice(i * PER_PAGE, (i + 1) * PER_PAGE),
);

const GallerySection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight")
        setOpenIndex((i) => ((i ?? 0) + 1) % photos.length);
      if (event.key === "ArrowLeft")
        setOpenIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  const step = (delta: number) =>
    setOpenIndex((i) => ((i ?? 0) + delta + photos.length) % photos.length);

  return (
    <section id="gallery" className="relative py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-12">
          <span className="text-primary text-lg font-medium tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-foreground">
            Glimpse of GLOFeagles '26
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-5">
            Moments from the challenge session at NCVPRIPG 2026, LNMIIT Jaipur
          </p>
        </div>

        <Carousel opts={{ align: "start" }} className="scroll-reveal px-10">
          <CarouselContent>
            {pages.map((page, pageIndex) => (
              <CarouselItem key={pageIndex}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {page.map((src, i) => {
                    const index = pageIndex * PER_PAGE + i;
                    return (
                      <button
                        key={src}
                        onClick={() => setOpenIndex(index)}
                        aria-label={`Open photo ${index + 1} of ${photos.length} from GLOFeagles '26`}
                        className="group block w-full glass-card rounded-xl overflow-hidden hover:border-primary/40 transition-all"
                      >
                        <img
                          src={src}
                          alt={`GLOFeagles '26 photo ${index + 1}`}
                          loading="lazy"
                          className="w-full h-40 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </button>
                    );
                  })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
        >
          <img
            src={photos[openIndex]}
            alt={`GLOFeagles '26 photo ${openIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
          />

          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded-full bg-card/80 text-foreground hover:bg-card"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 md:left-6 p-2 rounded-full bg-card/80 text-foreground hover:bg-card"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 md:right-6 p-2 rounded-full bg-card/80 text-foreground hover:bg-card"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
