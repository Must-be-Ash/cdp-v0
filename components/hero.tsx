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
        Hey, I&apos;m Ash! ☕ I&apos;m a DevRel at CDP, helping developers build amazing Web3 experiences. If my content helps you learn something new, consider buying me a coffee to keep the creativity flowing!
      </p>
    </div>
  );
}
