'use server';

import { db } from "@/db/db";
import { snippets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


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

  await db.insert(snippets)
    .values({ title, code, language })
    .execute();

  revalidatePath('/');
  redirect('/');
}

export async function editSnippet(id: number, title: string, code: string) {
  console.log('editSnippet', code);

  await db.update(snippets)
    .set({ code, title })
    .where(eq(snippets.id, id))
    .execute();

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  console.log('deleteSnippet', id);

  await db.delete(snippets)
    .where(eq(snippets.id, id))
    .execute();

  revalidatePath(`/`);
  redirect('/');
}