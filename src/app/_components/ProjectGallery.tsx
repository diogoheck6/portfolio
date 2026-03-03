import Image from "next/image";

export function ProjectGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  if (!images?.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">Gallery</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((img) => (
          <div
            key={img.src}
            className="rounded-lg border border-zinc-800 overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className="w-full h-auto"
              priority={false}
            />
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-zinc-600">
        Screenshots may be anonymized or mocked when needed.
      </p>
    </section>
  );
}
