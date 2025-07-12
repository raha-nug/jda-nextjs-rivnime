export default function NotFound() {
  return (
    <section className="p-8 flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </a>
    </section>
  );
}