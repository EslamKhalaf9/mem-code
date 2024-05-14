'use server';

import { Snippet } from "@/components/snippets/snippet-list";
import { db } from "@/db/db";
import { snippets } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type CreateSnippet = {
  title: string;
  code: string;
  language: string;
}

export async function createSnippet(formDate: FormData) {
  console.log('createSnippet', formDate);

  const title = formDate.get('title')
  const code = formDate.get('code')
  const language = formDate.get('language')

  if (!title || !code || !language) {
    throw new Error('All fields are required');
  }

  if (typeof title !== 'string' || typeof code !== 'string' || typeof language !== 'string') {
    throw new Error('All fields must be strings');
  }

  db.insert(snippets)
    .values({ title, code, language })
    .execute();

  revalidatePath('/');
  redirect('/');
}