import { supabase } from "infrastructure/supabase.ts";
import { Uploader } from "infrastructure/uploader.ts";

import { type ServerState } from "infrastructure/Types.d.ts";
import { type HandlerContext, Handlers } from "$fresh/server.ts";
import { CreateMealRequest, CreateMealResponse, MealFormDataCreate } from "domain/meal/create/Types.d.ts";
import { CreateMeal } from "domain/meal/create/MealCreate.ts";
import MealRepository from "infrastructure/meal/MealRepository.ts";
import { MealUploader } from "infrastructure/meal/MealUploader.ts";

function getFormData(formData: FormData): MealFormDataCreate {
  return {
    name: String(formData.get("name")),
    description: String(formData.get("description")),
    price: +(formData.get("price") || 0),
    photo: formData.get("photo") as File,
  };
}

export const handler: Handlers<Response, ServerState> = {
  async POST(
    request: Request,
    context: HandlerContext<Response, ServerState>,
  ): Promise<Response> {

    if(!context.state.user) {
      const headers = new Headers();
      headers.set("location", "/");
      return new Response(null, { status: 401, headers });
  }

    const input: CreateMealRequest = {
      formData: getFormData(await request.formData()),
      user: context.state.user
    }

    const createMeal = new CreateMeal(
      new MealRepository,
      new MealUploader
    );

    const output: CreateMealResponse = {};
    
    await createMeal.execute(input, output);

    const headers = new Headers();
    headers.set("location", "/ma-cuisine/mes-plats");
    return new Response(null, { status: 303, headers });
  },
};
