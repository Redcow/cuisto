import { type AppError } from "exceptions/AppError.ts";
import { type User } from "domain/user/Types.d.ts";
import type Meal from "domain/meal/Entity.ts";
import { MealError } from "exceptions/MealError.ts";

export type MealFormDataCreate = {
  name: string;
  price: number;
  description: string;
  photo: File;
};

export type CreateMealRequest = {
  formData: MealFormDataCreate;
  user: User;
};

export type CreateMealResponse = {
  meal?: Meal;
  error?: MealError;
};

export interface MealCreateGatewayI {
  save(meal: Meal): Promise<Meal>;
}

export interface MealPhotoUploaderI {
  uploadPhoto(photo: File, path: string): Promise<void>;
  createPathForPhoto(photo: File, meal: Meal): string;
}
