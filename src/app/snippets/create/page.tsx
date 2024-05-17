'use client';

import { useActionState } from "react";
import Link from "next/link";
import * as Actions from "@/server/actions"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CreateSnippetPage() {

  const initialState = {
    message: "",
  }

  const [state, formAction] = useActionState(Actions.createSnippet, initialState);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form action={formAction}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Create a new Snippet</CardTitle>
            <CardDescription>
              Fill in the form below to create a new snippet.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Title</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter the title of the snippet"
                // required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="language">Language</Label>
                <Select name="language">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup >
                      <SelectLabel>Language</SelectLabel>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="typescript">TypeScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="ruby">Ruby</SelectItem>
                      <SelectItem value="go">Go</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="csharp">C#</SelectItem>
                      <SelectItem value="php">PHP</SelectItem>
                      <SelectItem value="html">HTML</SelectItem>
                      <SelectItem value="css">CSS</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="code">Code</Label>
                </div>
                <textarea id="code" className="border rounded p-2 w-full" name="code" />
              </div>
              {/* form state message */}
              {state.message && (
                <div className="bg-red-200 my-2 p-2 rounded border border-red-400">{state.message}</div>
              )}
              <Button type="submit" className="w-full">
                Create Snippet
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Cancel
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
