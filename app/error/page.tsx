import { Button } from "@/components/ui/button";
import { TriangleAlert, TriangleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 animate-fade-in">
      <div className="mx-auto max-w-md text-center">
        <TriangleAlert className="mx-auto h-12 w-12 text-red-500 animate-bounce" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Error: Something went wrong
        </h1>
        <p className="mt-4 text-muted-foreground">
          We're sorry, but an unexpected error has occurred. Please try again
          later or contact support if the issue persists.
        </p>
        <div className="mt-6">
          <Button variant="destructive" asChild>
            <Link href="/">Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
