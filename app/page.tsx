"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/web/SubmitButton";
import { File } from "lucide-react";
import { submitForm } from "./actions";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./utils/ZodSchema";

export default function Home() {
  const [lastResult, action] = useFormState(submitForm, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Card className="w-[500px]">
        <Tabs defaultValue="problem">
          <CardHeader>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="password">Question</TabsTrigger>
              <TabsTrigger value="lol">Feedback</TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent>
            <TabsContent value="problem">
              <p className="text-muted-foreground text-sm">
                What is the issue? If you’re reporting a bug, what are the steps
                you took so we can reproduce the behaviour?
              </p>
              <form
                id={form.id}
                onSubmit={form.onSubmit}
                action={action}
                noValidate
                className="space-y-4 flex flex-col mt-2"
              >
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name={fields.name.name}
                    defaultValue={fields.name.initialValue}
                    key={fields.name.key}
                    id="name"
                  />
                  <p className="text-red-500 text-sm">{fields.name.errors}</p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="problem">Problem</Label>
                  <Textarea
                    placeholder="Something is wrong..."
                    className="h-32"
                    name={fields.message.name}
                    defaultValue={fields.message.initialValue}
                    key={fields.message.key}
                  />
                  <p className="text-red-500 text-sm">
                    {fields.message.errors}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="problem">Asset</Label>
                  <Input
                    type="file"
                    name={fields.image.name}
                    key={fields.image.key}
                    id="image"
                  />
                </div>
                <SubmitButton />
              </form>
            </TabsContent>
            <TabsContent value="password">
              <p>
                How can we help? Please share any relevant information we may
                need to answer your question.
              </p>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </div>
              <SubmitButton />
            </TabsContent>
            <TabsContent value="lol">
              <p>
                How can we improve Linear? If you have a feature request, can
                you also share how you would use it and why it’s important to
                you?
              </p>
              <div className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </div>

              <SubmitButton />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
