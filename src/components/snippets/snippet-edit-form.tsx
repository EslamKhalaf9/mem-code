"use client";
import * as actions from "@/server/actions";

import { Editor } from "@monaco-editor/react";
import { Snippet } from "./snippet-list";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState<string>(snippet.code);
  const [title, setTitle] = useState<string>(snippet.title);

  function handleEditorChange(value: string = "") {
    console.log(value);
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, title, code);

  return (
    <div>
      <form action={editSnippetAction} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="title" className="text-xl">Title</Label>
          <Input type="text" name="title" defaultValue={snippet.title} className="text-md" onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <Editor
          height="40vh"
          theme="vs-dark"
          language={snippet.language}
          defaultValue={snippet.code}
          options={{
            minimap: { enabled: false },
          }}
          onChange={handleEditorChange}
        />
        <Button type="submit" variant="default">Save</Button>
      </form>
    </div>
  )
}
