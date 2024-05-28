import { z } from "zod"

export const todoFormSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "Title must be at least 2 characters.",
      })
      .max(30, {
        message: "Title must not be longer than 30 characters.",
      }),

      body: z
      .string()
      .max(100, {
        message: "Descreption must not be longer than 100 characters.",
      }).optional(),
    
  })

  export type TodoFormValues = z.infer<typeof todoFormSchema>
