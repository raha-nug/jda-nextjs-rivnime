export default function AboutPage() {
  return (
    <section className="p-8">
      <div>
        <h1 className="text-7xl">About Page</h1>
        <div className="mt-4 p-5">
          <div className="w-1/2">
            <p className="text-lg mt-4">
              This is the about page content. Here you can find information
              about the Rivnime project and its purpose. Rivnime is a platform
              dedicated to providing anime enthusiasts with the latest news,
              reviews, and discussions about their favorite anime series and
              movies.


            </p>
            <p className="text-lg mt-4">
              ANIME API from http://api.jikan.moe/v4/ is used to fetch anime data, allowing users to explore
              various anime titles, their details, and related information.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
