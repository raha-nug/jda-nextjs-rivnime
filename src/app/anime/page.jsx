// "use client";

import Image from "next/image";
import Link from "next/link";

export default async function AnimePage() {
  const res = await fetch(process.env.ANIME_API_URL + "anime", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log(data);
  return (
    <section>
      <div className="p-8">
        <h1 className="text-7xl">Anime Page</h1>
        <div className="mt-4 p-5">
          <div className="w-1/2">
            <p className="text-lg mt-4">
              This is the anime page content. Here you can find a list of top
              anime series and movies.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Top Anime</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.data.map((anime, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow">
                <Link href={`/anime/${anime.mal_id}`}>
                  <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={anime.images.jpg.image_url}
                      width={300}
                      height={300}
                      alt={anime.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <h3 className="text-xl font-semibold">{anime.title}</h3>
                <p className="text-gray-600 truncate">{anime.synopsis}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
