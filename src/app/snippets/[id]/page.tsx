import { db } from "@/db/db";
import { snippets } from "@/db/schema";
import { eq } from "drizzle-orm";

interface SnippetPageProps {
  params: {
    id: string;
  }
}

export default async function SnippetPage({ params }: SnippetPageProps) {
  console.log('snippet page', params);
  const [snippet] = await db.select()
    .from(snippets)
    .where(eq(snippets.id, parseInt(params.id)))
    .execute();

  return (
    <div>
      <h1>{snippet.title}</h1>
      <pre>{snippet.code}</pre>
    </div>
  )
}
