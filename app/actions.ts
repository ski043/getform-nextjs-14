"use server";

import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./utils/ZodSchema";
import { redirect } from "next/navigation";

const formProblemUrl = "https://getform.io/f/axojnnlb";

export async function TalkToSalesAction(prevState: any, formData: FormData) {
  try {
    const submission = parseWithZod(formData, {
      schema: submissionSchema,
    });

    if (submission.status !== "success") {
      return submission.reply();
    }
    const response = await fetch(formProblemUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return redirect("/success");
  } catch (error) {
    return redirect("/error");
  }
}

export async function SupportTicketAction(prevState: any, formData: FormData) {
  try {
    const submission = parseWithZod(formData, {
      schema: submissionSchema,
    });

    if (submission.status !== "success") {
      return submission.reply();
    }
    const response = await fetch(formProblemUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return redirect("/success");
  } catch (error) {
    return redirect("/error");
  }
}
