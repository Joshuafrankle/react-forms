import { string, z } from "zod";

export const formSchema = z.object({
  question: z.string(),
  questionId: string(),
  description:z.string().optional(),
  answer: z.any(),
  type: z.enum([  "Long Text",
  "Short Text",
   "Email",
   "Number",
   "Password",
   "Single Select",
   "Multiselect",
   "Dropdown",
   "Rating",
   "File Upload"]),
   option: z.array(z.string()),
   validation: z.object(
    {
      required: z.optional(z.union([z.string(), z.boolean()])),
      validate: z.optional(z.function().args(z.any())),
      minLength: z.optional(z.union([z.object({
        value: z.number(),
        message: z.string()
      }), z.number()])),
      maxLength: z.optional(z.union([z.object({
        value: z.number(),
        message: z.string()
      }), z.number()])),
      pattern: z.object({
        value: z.any(),
        message: z.string()
      })
    }
   )
})

export interface InputType {
  question: string;
  questionId: string;
  description?: string;
  answer: any;
  type:
    | "Long Text"
    | "Short Text"
    | "Email"
    | "Number"
    | "Password"
    | "Single Select"
    | "Multiselect"
    | "Dropdown"
    | "Rating"
    | "File Upload";
  options: Array<string>;
  validation: {
    required?: string | boolean;
    validate?: (v: any) => boolean;
    minLength?:
      | {
          value: number;
          message: string;
        }
      | number;
    maxLength?:
      | {
          value: number;
          message: string;
        }
      | number;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

export interface FormType {
  id: number | string;
  formTitle: string;
  formDes?: string;
  proof: Group[];
  form: InputType[];
}
export interface Group {
  name: string;
  description?: string;
  id: string;
  isSelected?: boolean;
}
