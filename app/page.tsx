"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/web/SubmitButton";
import { SupportTicketAction, TalkToSalesAction } from "./actions";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./utils/ZodSchema";

export default function Home() {
  const [problemResult, problemAction] = useFormState(
    TalkToSalesAction,
    undefined
  );
  const [supportResult, supportAction] = useFormState(
    SupportTicketAction,
    undefined
  );

  const [problemForm, problemFields] = useForm({
    // Sync the result of last submission
    lastResult: problemResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [supportForm, supportFields] = useForm({
    // Sync the result of last submission
    lastResult: supportResult,

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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="problem">Talk to Sales</TabsTrigger>
              <TabsTrigger value="password">Support Ticket</TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent>
            <TabsContent value="problem">
              <p className="text-muted-foreground text-sm">
                Chat with a Solutions Engineer to learn more about Vitess,
                PlanetScale Managed, pricing, and which plan is best for your
                team.
              </p>
              <form
                id={problemForm.id}
                onSubmit={problemForm.onSubmit}
                action={problemAction}
                noValidate
                className="space-y-4 flex flex-col mt-2"
              >
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name={problemFields.name.name}
                    defaultValue={problemFields.name.initialValue}
                    key={problemFields.name.key}
                    id="name"
                    placeholder="John Doe"
                  />
                  <p className="text-red-500 text-sm">
                    {problemFields.name.errors}
                  </p>
                </div>
                <div className="space-y-1 flex flex-col">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name={problemFields.email.name}
                    defaultValue={problemFields.email.initialValue}
                    key={problemFields.email.key}
                    id="email"
                    placeholder="john.doe@example.com"
                  />
                  <p className="text-red-500 text-sm">
                    {problemFields.email.errors}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="problem">Question or Comment</Label>
                  <Textarea
                    placeholder="Pleae share some details about your needs..."
                    className="h-32"
                    name={problemFields.message.name}
                    defaultValue={problemFields.message.initialValue}
                    key={problemFields.message.key}
                  />
                  <p className="text-red-500 text-sm">
                    {problemFields.message.errors}
                  </p>
                </div>

                <SubmitButton />
              </form>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-muted-foreground text-sm">
                Chat with a Solutions Engineer to learn more about Vitess,
                PlanetScale Managed, pricing, and which plan is best for your
                team.
              </p>
              <form
                id={supportForm.id}
                onSubmit={supportForm.onSubmit}
                action={supportAction}
                noValidate
                className="space-y-4 flex flex-col mt-2"
              >
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name={supportFields.name.name}
                    defaultValue={supportFields.name.initialValue}
                    key={supportFields.name.key}
                    id="name"
                    placeholder="John Doe"
                  />
                  <p className="text-red-500 text-sm">
                    {supportFields.name.errors}
                  </p>
                </div>
                <div className="space-y-1 flex flex-col">
                  <Label htmlFor="email">Account Email</Label>
                  <Input
                    name={supportFields.email.name}
                    defaultValue={supportFields.email.initialValue}
                    key={supportFields.email.key}
                    id="email"
                    placeholder="John.Doe@example.com"
                  />
                  <p className="text-red-500 text-sm">
                    {supportFields.email.errors}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="problem">Problem</Label>
                  <Textarea
                    placeholder="Something is wrong..."
                    className="h-32"
                    name={supportFields.message.name}
                    defaultValue={supportFields.message.initialValue}
                    key={supportFields.message.key}
                  />
                  <p className="text-red-500 text-sm">
                    {supportFields.message.errors}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="problem">Asset</Label>
                  <Input
                    type="file"
                    name={supportFields.image.name}
                    key={supportFields.image.key}
                    id="image"
                  />
                </div>
                <SubmitButton />
              </form>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
