import Link from "next/link";
import { Button } from "../ui/button";
import SnippetItem from "./snippet-item";

export interface Snippet {
  id: number;
  title: string;
  code: string;
  language: string;
}

interface SnippetListProps {
  snippets: Snippet[];
}

export default function SnippetList({ snippets }: SnippetListProps) {
  return (
    <div className="snippets w-full container">
      <Link href="/snippets/create">
        <Button variant="default">Create Snippet</Button>
      </Link>
      <div className="flex flex-col gap-4 mt-4">
        {snippets.map((snippet) => (
          <SnippetItem key={snippet.id} snippet={snippet} />
        ))}
      </div>
    </div>
  )
}
