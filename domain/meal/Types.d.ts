import { MealFormDataCreate } from "domain/meal/create/Types.d.ts";


export type MealFormDataUpdate = {
  user_id: string|null|undefined;
  id: string|null|undefined;
} & MealFormDataCreate

export interface MealGateway {
    
}