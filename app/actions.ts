"use server";

import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./utils/ZodSchema";

const formProblemUrl = "https://getform.io/f/axojnnlb";

export async function submitForm(prevState: any, formData: FormData) {
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
    console.log("response ok");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

export async function SubmitQuestion(formData: FormData) {}
