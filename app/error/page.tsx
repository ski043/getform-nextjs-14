import { Button } from "@/components/ui/button";
import { TriangleAlert, TriangleIcon } from "lucide-react";
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
          <Button className="inline-flex items-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-red-50 shadow-sm transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
