// schema.ts
import { z } from "zod";

export const submissionSchema = z.object({
  name: z.string().min(2),
  message: z.string().min(2).max(1000),
  image: z.instanceof(File, { message: "Profile is required" }).optional(),
});
