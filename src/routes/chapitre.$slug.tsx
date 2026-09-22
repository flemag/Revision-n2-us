import { createFileRoute, notFound } from "@tanstack/react-router";
import { ChapterHead } from "@/components/content";
import { CHAPTER_CONTENT } from "@/content/registry";
import { findNav } from "@/lib/nav";

export const Route = createFileRoute("/chapitre/$slug")({
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useParams();
  const item = findNav(slug);
  const Body = CHAPTER_CONTENT[slug];
  if (!item || !Body) throw notFound();
  return (
    <article>
      <ChapterHead item={item} />
      <Body />
    </article>
  );
}
