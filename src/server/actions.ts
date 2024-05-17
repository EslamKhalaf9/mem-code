'use server';

import { db } from "@/db/db";
import { snippets } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createSnippet(formState: any, formDate: FormData) {
  console.log('createSnippet', formDate);

  const title = formDate.get('title')
  const code = formDate.get('code')
  const language = formDate.get('language')

  if (!title || !code || !language) {
    return { message: 'All fields are required' };
  }

  if (typeof title !== 'string' || typeof code !== 'string' || typeof language !== 'string') {
    return { message: 'Invalid input' };
  }

  try {
    await db.insert(snippets)
      .values({ title, code, language })
      .execute();
  } catch (error: unknown) {
    if (error instanceof Error)
      return { message: error.message };
    else
      return { message: 'An error occurred' };
  }

  revalidatePath('/');
  redirect('/'); // throws an error NEXT_REDIRECT
}

export async function editSnippet(id: number, title: string, code: string) {
  await db.update(snippets)
    .set({ code, title })
    .where(eq(snippets.id, id))
    .execute();

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.delete(snippets)
    .where(eq(snippets.id, id))
    .execute();

  revalidatePath(`/`);
  redirect('/');
}