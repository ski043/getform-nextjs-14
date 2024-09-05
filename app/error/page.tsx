import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 ">
        <div className="flex size-20 items-center justify-center rounded-full bg-red-500/10">
          <TriangleAlert className="size-10 text-red-500" />
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          Error, something went wrong!
        </h2>
        <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm mx-auto">
          Something went wrong with this submission, please try again.
        </p>

        <Button asChild>
          <Link href="/">Try again</Link>
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
