import SnippetList from "@/components/snippets/snippet-list";

const fakeSnippets = [
  {
    id: "1",
    title: "Snippet 1",
    code: "console.log('Hello, world!');",
  },
  {
    id: "2",
    title: "Snippet 2",
    code: "console.log('Hello, world!');",
  },
  {
    id: "3",
    title: "Snippet 3",
    code: "console.log('Hello, world!');",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl my-4">Snippets List</h1>
      <SnippetList snippets={fakeSnippets} />
    </div>
  );
}
