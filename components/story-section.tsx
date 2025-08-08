import Image from "next/image";

interface StorySectionProps {
  title?: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export function StorySection({
  title,
  content,
  imageUrl,
  imageAlt = "Story image",
  className = ""
}: StorySectionProps) {
  return (
    <div className={`bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 mb-6 ${className}`}>
      {title && (
        <h2 className="text-xl font-semibold text-white mb-4 text-center">{title}</h2>
      )}

      {imageUrl && (
        <div className="mb-4 flex justify-center">
          <div className="relative w-full max-w-md h-48 bg-white/10 rounded-2xl overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
}
