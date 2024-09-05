"use client";

import { Card, CardContent } from "@/components/ui/card";
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
  const [salesResult, salesAction] = useFormState(TalkToSalesAction, undefined);
  const [supportResult, supportAction] = useFormState(
    SupportTicketAction,
    undefined
  );

  const [salesForm, salesFields] = useForm({
    // Sync the result of last submission
    lastResult: salesResult,

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
    <section className="min-h-screen w-screen flex flex-col items-center justify-center px-5 absolute inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <h1 className="text-4xl font-bold mb-7">Contact us</h1>
      <Card className="max-w-[500px] w-full">
        <Tabs defaultValue="sales">
          <CardContent className="mt-5">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="sales">Talk to Sales</TabsTrigger>
              <TabsTrigger value="support">Support Ticket</TabsTrigger>
            </TabsList>

            <TabsContent value="sales">
              <p className="text-muted-foreground text-sm">
                You want to integrate your product with us? We can help you.
                Please contact us down below.
              </p>
              <form
                className="flex flex-col gap-y-4 mt-5"
                id={salesForm.id}
                onSubmit={salesForm.onSubmit}
                action={salesAction}
                noValidate
              >
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name={salesFields.name.name}
                    defaultValue={salesFields.name.initialValue}
                    key={salesFields.name.key}
                    id="name"
                    placeholder="John Doe"
                  />
                  <p className="text-red-500 text-sm">
                    {salesFields.name.errors}
                  </p>
                </div>
                <div className="space-y-1 flex flex-col">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name={salesFields.email.name}
                    defaultValue={salesFields.email.initialValue}
                    key={salesFields.email.key}
                    id="email"
                    placeholder="john.doe@example.com"
                  />
                  <p className="text-red-500 text-sm">
                    {salesFields.email.errors}
                  </p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="problem">Question or Comment</Label>
                  <Textarea
                    placeholder="Pleae share some details about your needs..."
                    className="h-32"
                    name={salesFields.message.name}
                    defaultValue={salesFields.message.initialValue}
                    key={salesFields.message.key}
                  />
                  <p className="text-red-500 text-sm">
                    {salesFields.message.errors}
                  </p>
                </div>

                <SubmitButton />
              </form>
            </TabsContent>

            <TabsContent value="support">
              <p className="text-muted-foreground text-sm">
                Troubleshoot a technical issue or payment problem.
              </p>
              <form
                className="flex flex-col gap-y-4 mt-5"
                id={supportForm.id}
                onSubmit={supportForm.onSubmit}
                action={supportAction}
                noValidate
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
    </section>
  );
}
