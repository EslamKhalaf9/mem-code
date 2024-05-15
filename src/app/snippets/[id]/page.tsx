import * as actions from "@/server/actions";

import { Button } from "@/components/ui/button";
import { db } from "@/db/db";
import { snippets } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="m-4">
        <Link href="/">
          <Button variant="default">Back</Button>
        </Link>
      </div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button>Delete</Button>
          </form>
        </div>
      </div>
      <pre className="mx-4 p-3 border rounded bg-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  )
}
