import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center py-8 mb-6">
      <Image
        src="/avatar.png"
        alt="Jane Doe"
        width={80}
        height={80}
        className="rounded-full object-cover w-20 h-20"
        priority
      />
      <h1 className="text-3xl font-bold mt-4 text-white">Jane Doe</h1>
      <p className="mt-2 text-sm text-gray-300 max-w-xs leading-relaxed">
        Hey, I&apos;m Jane. I host a podcast about tech & culture. If you enjoy the show, you can help me fund the gear I need to keep going.
      </p>
    </div>
  );
}
