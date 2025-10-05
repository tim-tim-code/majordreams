import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white md:bg-transparent p-4 md:p-0">
      {/* Image Grid */}
      <div className="absolute inset-4 md:inset-0 grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left Image - Hidden on Mobile */}
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/images/Heropics/middle.jpeg"
            alt="Major Dreams Collection"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>

        {/* Right Image - Full width on Mobile, limited height */}
        <div className="relative h-[calc(100vh-2rem)] md:h-full w-full overflow-hidden">
          <Image
            src="/images/Heropics/right.jpeg"
            alt="Major Dreams Collection"
            fill
            className="object-cover object-[center_90%]"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-start md:items-center justify-center pointer-events-none pt-[12vh] md:pt-0">
        <h1 className="font-heading text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-center px-4">
          New bottoms arrived.
        </h1>
      </div>
    </section>
  );
}
