import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/_components/ui/hover-card";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-40 h-1/2">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
      <HoverCard>
        <HoverCardTrigger asChild>
          <button>Hover</button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p>The React Framework – created and maintained by @vercel.</p>
        </HoverCardContent>
      </HoverCard>
    </main>
  );
}

export default NotFound;
