import SnippetEditForm from "@/components/snippets/snippet-edit-form";
import { db } from "@/db/db";
import { snippets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  }
}

export default async function SnippetEditPage({ params }: SnippetEditPageProps) {
  const id = parseInt(params.id);

  const [snippet] = await db.select()
    .from(snippets)
    .where(eq(snippets.id, id))
    .execute();

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="container">
      <h1 className="text-4xl my-4 text-center">Edit Snippet</h1>
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}
