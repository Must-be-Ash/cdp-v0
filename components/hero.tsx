import Image from "next/image";

export function Hero() {
return (
  <div className="flex flex-col items-center text-center py-8">
    <Image
      src="/avatar.png"
      alt="Ash"
      width={80}
      height={80}
      className="rounded-full object-cover w-20 h-20"
      priority
    />
    <h1 className="text-3xl font-bold mt-4 text-white">Ash</h1>
    <p className="mt-2 text-sm text-gray-300 max-w-xs leading-relaxed">
      Help me fulfill my dream of skydiving! Every donation brings me closer to experiencing the ultimate thrill and checking this off my bucket list.
    </p>
  </div>
);
}
