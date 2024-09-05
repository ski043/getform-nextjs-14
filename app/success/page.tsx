import { Button } from "@/components/ui/button";
import { Check, FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 ">
        <div className="flex size-20 items-center justify-center rounded-full bg-green-500/10">
          <Check className="size-10 text-green-500" />
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          Success, we got your message!
        </h2>
        <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm mx-auto">
          Our team will get back to you shortly.
        </p>

        <Button asChild>
          <Link href="/">Go back to Homepage</Link>
        </Button>
      </div>
    </section>
  );
};

export default SuccessPage;
