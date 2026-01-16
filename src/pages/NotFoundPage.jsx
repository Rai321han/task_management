import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="bg-background p-5 min-h-screen h-full flex items-center justify-center">
        <div className="flex flex-col gap-3 w-full max-w-[600px] mx-auto items-center">
                <h1 className="text-3xl font-extrabold">
                Oops! Page not found
                </h1>
                <p>
                We couldn’t find the page you were looking for.
                <br/>Let’s get you back on track.
                </p>
                <Link to={"/"} className="p-2 border-b border-secondary hover:text-secondary font-bold">Go back to home</Link>
        </div>
    </main>
  );
}