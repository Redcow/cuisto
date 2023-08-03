import { createMealFromForm } from "domain/meal/Factory.ts";

import {
  type CreateMealRequest,
  type CreateMealResponse,
  type MealCreateGatewayI,
  type MealPhotoUploaderI,
} from "domain/meal/create/Types.d.ts";
import Meal from "domain/meal/Entity.ts";
import { AppError } from "exceptions/AppError.ts";


export class CreateMeal {
  private gateway: MealCreateGatewayI;
  private uploader: MealPhotoUploaderI;

  constructor(
    mealGateway: MealCreateGatewayI,
    mealUploader: MealPhotoUploaderI,
  ) {
    this.gateway = mealGateway;
    this.uploader = mealUploader
  }

  public async execute(
    request: CreateMealRequest,
    response: CreateMealResponse,
  ): Promise<void> {
    try {
        const meal = createMealFromForm(request.formData, request.user);

        const storedMeal = await this.gateway.save(meal);
    
        this.uploadPhoto(request.formData.photo, storedMeal);
    
        response.meal = storedMeal;
    } catch (error) {
        console.log(error)
        response.error = new AppError({
            name: "INVALID_TOKEN",
            message: "oops"
        });
    }
    
  }

  private uploadPhoto(photo: File, meal: Meal)
  {
    const path = this.uploader.createPathForPhoto(photo , meal);
    this.uploader.uploadPhoto(photo, path);
  }
}
