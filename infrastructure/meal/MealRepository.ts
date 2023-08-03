import { supabase } from "infrastructure/supabase.ts";
import { duplicateMeal } from "domain/meal/Factory.ts";

import { type MealCreateGatewayI } from "domain/meal/create/Types.d.ts";
import type Meal from "domain/meal/Entity.ts";
import { MealError } from "exceptions/MealError.ts";

export default class MealRepository implements MealCreateGatewayI {
  async save(meal: Meal): Promise<Meal> {
    const { data, error } = await supabase
      .from("meals")
      .insert({ ...meal, user_id: meal.user.id })
      .select();

    if(error) throw new MealError({
        name: "MEAL_SAVE_ERROR",
        message: "Erreur lors de la sauvegarde du plat",
        cause: error
    })

    return duplicateMeal(meal, data.id);
  }
}
