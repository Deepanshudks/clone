import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      `⚠️ 404 Error: Attempted access to a non-existent route → ${location.pathname}`
    );
  }, [location.pathname]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-4">
        <h1 className="text-7xl font-extrabold mb-4 tracking-tight text-blue-400">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-2">
          Oops! The page you’re looking for doesn’t exist.
        </h2>
        <p className="text-gray-400 mb-8">
          It might have been moved or deleted. Let’s get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-blue-500 px-6 py-2 text-white font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
