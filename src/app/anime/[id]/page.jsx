import Image from "next/image";

export default async function AnimePage({ params }) {
  const { id } = params;

  const response = await fetch(`${process.env.ANIME_API_URL}anime/${id}`, {
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch anime details");
  }
  const animeData = await response.json();

  return (
    <section className="p-8">
      <div>
        <h1 className="text-7xl">Anime Details for ID: {id}</h1>
        <div className="mt-4 p-5">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">{animeData.data.title}</h2>
            <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={animeData.data.images.jpg.image_url}
                width={3000}
                height={3000}
                alt={animeData.data.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg mt-4">{animeData.data.synopsis}</p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
