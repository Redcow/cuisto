import Meal from "domain/meal/Entity.ts"
import { MealFormDataCreate } from "domain/meal/create/Types.d.ts";
import { User } from "domain/user/Types.d.ts";

function duplicateMeal (meal: Meal, id: string): Meal
{
    return new Meal(meal.name, meal.description, meal.price, meal.user, id);
}

function createMealFromForm (form: MealFormDataCreate, user: User): Meal
{
    return new Meal(form.name, form.description, form.price, user);
}

export {
    duplicateMeal,
    createMealFromForm
}
