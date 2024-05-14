import SnippetList from "@/components/snippets/snippet-list";
import { db } from "../../db/db";
import { snippets } from "@/db/schema";

export default async function Home() {
  const snippetsData = await db.select().from(snippets).execute();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl my-4">Snippets List</h1>
      <SnippetList snippets={snippetsData} />
    </div>
  );
}
