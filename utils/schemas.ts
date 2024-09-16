import * as z from "zod";

export const profileSchema = z.object({
  //   firstName: z.string().max(5, { message: "max length is 5" }),
  firstName: z
    .string()
    .min(4, { message: "First name must be at least 4 characters" }),
  lastName: z
    .string()
    .min(4, { message: "Last name must be at least 4 characters" }),
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters" }),
});

export function validateWithZodSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
) {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(". "));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFilesTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File size must be less than 1 MB!")
    .refine((file) => {
      return (
        !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image!");
}
