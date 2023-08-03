import { AppError } from "exceptions/AppError.ts";

type ErrorName =
  | "MEAL_SAVE_ERROR"
  | "INVALID_TOKEN";

export class MealError extends AppError<ErrorName> {}