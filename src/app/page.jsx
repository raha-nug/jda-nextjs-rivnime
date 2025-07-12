import Image from "next/image";

export default async function Home() {



  return (
    <section className="p-8 flex space-y-8 w-full h-full justify-around">
      <div className="">
        <h1 className="text-5xl font-bold text-gray-900 ">
          Welcome to Rivnime 
        </h1>
        <p>This is the home page content.</p>
      </div>
      <div className="">
        <Image
          width={200}
          height={200}
          src={"/anime-jepang.jpg"}
          alt="Main Image"
          className="w-full h-full rounded-lg rounded-br-4xl rounded-tl-4xl object-cover"
        />
      </div>
    </section>
  );
}
