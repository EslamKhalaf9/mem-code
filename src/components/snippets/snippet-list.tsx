import { Button } from "../ui/button";
import SnippetItem from "./snippet-item";

export interface Snippet {
  id: string;
  title: string;
  code: string;
}

interface SnippetListProps {
  snippets: Snippet[];
}

export default function SnippetList({ snippets }: SnippetListProps) {
  return (
    <div className="snippets w-full container">
      <div className="flex flex-col gap-4">
        {snippets.map((snippet) => (
          <SnippetItem key={snippet.id} snippet={snippet} />
        ))}
      </div>
    </div>
  )
}
