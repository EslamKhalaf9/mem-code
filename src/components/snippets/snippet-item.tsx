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
      <h2 className="text-xl">{snippet.title}</h2>
      <Link href={`/snippets/${snippet.id.toString()}`}>
        <Button variant="default">View</Button>
      </Link>
    </div>
  )
}
