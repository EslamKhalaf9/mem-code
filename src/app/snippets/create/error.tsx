"use client";
import { Button } from '@/components/ui/button';
import React from 'react'

interface Props {
  error: Error;
  reset: () => void;
}

export default function CreateSnippetErrorPage(props: Props) {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl'>ops something went wrong</h1>
      <p className='text-2xl'>{props.error.message}</p>
      <Button onClick={props.reset} >retry</Button>
    </div>

  )
}
