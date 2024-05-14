import React from 'react'
import { Button } from '../ui/button'
import { Snippet } from './snippet-list'
import Link from 'next/link';

interface SnippetItemProps {
  snippet: Snippet;
}

export default function SnippetItem({ snippet }: SnippetItemProps) {
  return (
    <div className="snippet flex justify-between items-center border rounded py-2 px-4">
      <Link href={`/snippets/${snippet.id}`}>
        <h2 className="text-xl">{snippet.title}</h2>
      </Link>
      <div className="actions flex gap-2">
        <Button variant={"outline"}>Edit</Button>
        <Button variant={"destructive"}>Delete</Button>
      </div>
    </div>
  )
}
